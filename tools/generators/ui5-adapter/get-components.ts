import {RootObject} from "./index-api-json";
import {names} from "@nrwl/devkit";

export function getComponents({
                                implementers,
                                symbols
                              }: { implementers: Record<string, RootObject[]>; symbols: Record<string, RootObject> }) {
  const components = [];
  const inputTypes = {};
  const typesMap = {
    integer: 'number',
    float: 'number',
    double: 'number',
    boolean: 'boolean',
    string: 'string',
    object: 'Record<string, any>',
    array: 'Array<any>',
    htmlelement: 'HTMLElement',
    element: 'Element',
    node: 'Node'
  }

  function getPropertyType(type: string): string {
    if (symbols[type]) {
      if (symbols[type].kind === 'class') {
        const types = symbols[type].properties.map(p => JSON.stringify(p.type));
        return types.join(' | ');
      }
      // return symbols[type];
    }
    return typesMap[type.toLowerCase()] || 'any';
  }

  function getComponentDescription(symbol: RootObject) {
    if (symbol.tagname) {
      const symbolImplements = [];
      if (symbol.implements) {
        symbol.implements.forEach((i: string) => {
          symbolImplements.push(i)
        });
      }
      return {
        selector: symbol.tagname,
        component: symbol.basename,
        path: `@ui5/webcomponents/dist/${symbol.resource}`,
        inputs: (symbol.properties || []).filter(prop => prop.visibility === 'public').map((property) => {
          inputTypes[property.type] = true;
          const inputNames = names(property.name);
          return {
            publicName: inputNames.fileName,
            name: inputNames.propertyName,
            type: getPropertyType(property.type),
            defaultValue: property.defaultValue,
          }
        }),
        outputs: (symbol.events || []).filter(event => event.visibility === 'public').map((event) => {
          const eventNames = names(event.name);
          const parameters = (event.parameters || []).reduce((acc, parameter) => {
            acc[parameter.name] = getPropertyType(parameter.type);
            return acc;
          }, {});
          return {
            name: eventNames.propertyName,
            publicName: eventNames.propertyName === eventNames.name ? undefined : eventNames.name,
            data: `CustomEvent<{ ${Object.keys(parameters).map(key => `'${key}': ${parameters[key]}`).join(',')} }>`,
          }
        }),
        slots: (symbol.slots || []).filter(slot => slot.visibility === 'public' && slot.name !== 'default').map((slot) => {
          return {
            name: slot.name,
            instanceOf: (() => {
              const interfaceName = slot.type.replace('[]', '');
              if (!implementers[interfaceName]) {
                return getPropertyType(interfaceName);
              }
              if (symbolImplements.includes(interfaceName)) {
                return 'self';
              }
              return implementers[interfaceName].map((i) => getComponentDescription(i)).filter(c => c !== null);
            })(),
            isArray: slot.type.endsWith('[]'),
          }
        })
      }
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
