import {names} from "@nrwl/devkit";
import {SymbolObject} from "./api-json.types";

interface ComponentData {
  baseName: string;
  dependencies: Array<{ path: string, className: string }>,
  selector: string,
  implements: Array<string>,
  componentNames: {
    name: string;
    className: string;
    propertyName: string;
    constantName: string;
    fileName: string;
  },
  path: string,
  inputs: Array<{
    publicName: string,
    name: string,
    type: string,
    defaultValue: string,
  }>,
  outputs: Array<{
    name: string,
    publicName: string,
    type: string,
  }>,
  slots: Array<{
    name: string,
    type: string,
    supportedElements: Array<ComponentData>,
    isArray: boolean,
  }>
  formData?: {
    property: ComponentData["inputs"][number],
    events: Array<ComponentData["outputs"][number]>,
  }[]
}

const objectTypeMapper = (elementTagName: string, identifier: string) => {
  if (elementTagName === 'ui5-button') {
    if (identifier === 'accessibilityAttributes') {
      return `
        {
          expanded?: boolean;
          hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
          controls?: string | HTMLElement | Array<HTMLElement | string>;
        }
      `;
    }
  }
  if (elementTagName === 'ui5-link') {
    if (identifier === 'accessibilityAttributes') {
      return `
        {
          expanded?: boolean;
          hasPopup?: 'Dialog' | 'Grid' | 'Listbox' | 'Menu' | 'Tree';
        }
      `;
    }
  }
  return 'Record<string, any>';
}

export function getComponents({
                                implementers,
                                symbols
                              }: { implementers: Record<string, SymbolObject[]>; symbols: Record<string, SymbolObject> }): ComponentData[] {
  const components = [];
  const inputTypes = {};
  const typesMap: Record<string, string | ((tag: string, entryName: string) => string)> = {
    integer: 'number',
    float: 'number',
    double: 'number',
    boolean: 'boolean',
    string: 'string',
    csscolor: 'string',
    object: objectTypeMapper,
    array: 'Array<any>',
    htmlelement: 'HTMLElement',
    element: 'Element',
    node: 'Node'
  }

  function getPropertyType(type: string, tagname: string, identifier: string, component: ComponentData): string {
    const isArray = type.endsWith('[]');
    if (isArray) {
      type = type.slice(0, -2);
    }
    const mappedType = typesMap[type.toLowerCase()];
    if (!mappedType && symbols[type]) {
      if (symbols[type].kind === 'class') {
        let types = symbols[type].properties.map(p => JSON.stringify(p.type));
        types = types.length ? types : ['any'];
        if (isArray) {
          return `Array<${types.join(' | ')}>`;
        }
        return types.join(' | ');
      }
      if (symbols[type].kind === 'interface') {
        let types = implementers[type].map(c => `${c.basename}Directive['element']`);
        for (const dep of implementers[type]) {
          component.dependencies.push({
            path: `./${names(dep.basename).fileName}.directive`,
            className: `${dep.basename}Directive`
          })
        }
        types = types.length ? types : ['any'];
        if (isArray) {
          return `Array<${types.join(' | ')}>`;
        }
        return types.join(' | ');
      } else {
        console.log('wtf');
      }
    }
    if (typeof mappedType === 'function') {
      if (isArray) {
        return `Array<${mappedType(tagname, identifier)}>`;
      }
      return mappedType(tagname, identifier);
    }
    if (isArray) {
      return `Array<${mappedType || 'any'}>`;
    }
    return mappedType || 'any';
  }

  function getInputs(symbol: SymbolObject, component: ComponentData): ComponentData['inputs'] {
    return symbol.properties.filter(prop => prop.visibility === 'public').map((property) => {
      inputTypes[property.type] = true;
      const inputNames = names(property.name);
      return {
        publicName: inputNames.fileName,
        name: inputNames.propertyName,
        type: getPropertyType(property.type, symbol.tagname, inputNames.propertyName, component),
        defaultValue: property.defaultValue,
      }
    })
  }

  function getOutputs(symbol: SymbolObject, component: ComponentData): ComponentData['outputs'] {
    return symbol.events.filter(event => event.visibility === 'public').map((event) => {
      const eventNames = names(event.name);
      const parameters = (event.parameters || []).reduce((acc, parameter) => {
        acc[parameter.name] = getPropertyType(parameter.type, symbol.tagname, eventNames.propertyName, component);
        return acc;
      }, {});
      const eventType = !event.parameters?.length ? 'void' : `{ ${Object.keys(parameters).map(key => `'${key}': ${parameters[key]}`).join(',')} }`;
      return {
        name: eventNames.propertyName,
        publicName: eventNames.propertyName === eventNames.name ? undefined : eventNames.name,
        type: eventType,
      }
    });
  }

  function getSlots(symbol: SymbolObject, component: ComponentData): ComponentData['slots'] {
    return symbol.slots.filter(slot => slot.visibility === 'public' && slot.name !== 'default').map((slot) => {
      const interfaceName = slot.type.replace('[]', '');
      const canBeSelf = component.implements.includes(interfaceName);
      let slotComponents: any = implementers[interfaceName] || [];
      if (canBeSelf) {
        slotComponents = slotComponents.filter(c => c.basename !== component.componentNames.className);
      }
      slotComponents = slotComponents.map((i) => getComponentDescription(i)).filter(c => c !== null);
      canBeSelf && slotComponents.push(component);
      let type = slotComponents.map(c => `${c.componentNames.className}Directive['element']`).join(' | ') || 'HTMLElement';
      if (slot.type.endsWith('[]')) {
        type = `Array<${type}>`;
      }
      return {
        name: slot.name,
        type,
        supportedElements: slotComponents,
        isArray: slot.type.endsWith('[]'),
      }
    })
  }

  function getComponentDescription(symbol: SymbolObject): ComponentData {
    if (symbol.tagname) {
      const dependencies: Array<{ path: string, className: string }> = [];
      const component: ComponentData = {
        baseName: symbol.basename,
        dependencies,
        implements: symbol.implements,
        selector: symbol.tagname,
        componentNames: names(symbol.basename),
        path: symbol.resource,
        inputs: [],
        outputs: [],
        slots: [],
      };
      component.inputs = getInputs(symbol, component);
      component.outputs = getOutputs(symbol, component);
      component.slots = getSlots(symbol, component);
      if (symbol.formData) {
        component.formData = symbol.formData.map(data => {
          return {
            property: component.inputs.find(i => i.name === data.propertyName),
            events: component.outputs.filter(o => data.events.includes(o.name)),
          }
        });
      }
      const getDepIdentifier = ({path, className}: { path: string, className: string }) => `${path}#${className}`;
      for (const slot of component.slots) {
        for (const supportedSlotType of slot.supportedElements) {
          const isSelf = supportedSlotType.componentNames.className === component.componentNames.className;
          const dependency = {
            path: `./${supportedSlotType.componentNames.fileName}.directive`,
            className: `${supportedSlotType.componentNames.className}Directive`,
          };
          const dependencyIdentifier = getDepIdentifier(dependency);
          const alreadyIncluded = dependencies.findIndex(d => getDepIdentifier(d) === dependencyIdentifier) > -1;
          if (!isSelf && !alreadyIncluded) {
            dependencies.push(dependency)
          }
        }
      }

      return component
    }
    return null;
  }

  for (const symbol of Object.values(symbols)) {
    const component = getComponentDescription(symbol);
    if (component) {
      components.push(component);
    }
  }

  return components;
}
