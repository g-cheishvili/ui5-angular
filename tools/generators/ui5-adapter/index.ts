import {formatFiles, generateFiles, names, Tree} from '@nrwl/devkit';

const symbols = {};
const implementers: { [interfaceName: string]: any[] } = {}
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
      const types = symbols[type].properties.map(p => `'${p.type}'`);
      return types.join(' | ');
    }
    return symbols[type];
  }
  return typesMap[type.toLowerCase()] || 'any';
}

const directiveImport = (ui5ClassName: Record<string, string> | string, base: string) => {
  const {className, fileName} = typeof ui5ClassName === 'string' ? names(ui5ClassName) : ui5ClassName;
  const classSuffix = base.charAt(0).toUpperCase() + base.slice(1);
  return {
    className: `${className}${classSuffix}`,
    fileName: `${base}s/${fileName}.${base}`,
  }
}

function getComponentDescription(symbol: any) {
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
          data: `{
            detail: { ${Object.keys(parameters).map(key => `'${key}': ${parameters[key]}`).join(',')} }
          }`,
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

export default async function (tree: Tree, schema: any) {
  const appJson = JSON.parse(tree.read('node_modules/@ui5/webcomponents/dist/api.json', 'utf-8'));
  appJson.symbols.forEach((symbol) => {
    symbols[symbol.basename] = symbol;
    if (symbol.implements) {
      symbol.implements.forEach((interfaceName) => {
        if (!implementers[interfaceName]) {
          implementers[interfaceName] = [];
        }
        implementers[interfaceName].push(symbol);
      });
    }
  });
  const components = [];
  appJson.symbols.forEach((symbol) => {
    const component = getComponentDescription(symbol);
    if (component) {
      components.push(component);
    }
  });
  const directives = [];

  for (const component of components) {
    const namings = names(component.component);
    const imports = [];

    component.slots.forEach(slot => {
      const tagNames = [];
      const slotNames = names([namings.fileName, slot.name].join('-'));
      if (Array.isArray(slot.instanceOf)) {
        slot.instanceOf.forEach((i) => {
          tagNames.push(i.selector);
        });
      }
      if (slot.instanceOf === 'self') {
        tagNames.push(component.selector);
      }
      generateFiles(tree, `${__dirname}/files/slot`, `libs/ui5-angular/src/lib/slots`, {
        ...slotNames,
        slotName: slot.name,
        selector: tagNames.length === 0 ? `[${slotNames.fileName}]` : tagNames.map(t => `${t}[${slotNames.fileName}]`).join(', '),
      })
      directives.push(directiveImport(slotNames, 'slot'));
    });
    generateFiles(tree, `${__dirname}/files/directive`, 'libs/ui5-angular/src/lib/directives', {
      ...namings,
      ui5ComponentPath: component.path,
      selector: component.selector,
      inputs: component.inputs,
      outputs: component.outputs,
      imports
    });
    directives.push(directiveImport(component.component, 'directive'));
  }
  generateFiles(tree, `${__dirname}/files/module`, 'libs/ui5-angular/src/lib', {imports: directives})
  generateFiles(tree, `${__dirname}/files/other`, 'libs/ui5-angular/src', {imports: directives});
  await formatFiles(tree);
  return () => {
  };
}
