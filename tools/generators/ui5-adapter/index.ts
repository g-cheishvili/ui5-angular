import {formatFiles, generateFiles, names, Tree} from '@nrwl/devkit';
import {readFileSync} from "fs";
import {indexApiJson} from "./index-api-json";
import {getComponents} from "./get-components";

const ui5ApiJson = JSON.parse(readFileSync('./node_modules/@ui5/webcomponents/dist/api.json', 'utf8'));

const {symbols, implementers} = indexApiJson(ui5ApiJson);
const components = getComponents({symbols, implementers});

const directiveImport = (ui5ClassName: Record<string, string> | string, base: string) => {
  const {className, fileName} = typeof ui5ClassName === 'string' ? names(ui5ClassName) : ui5ClassName;
  const classSuffix = base.charAt(0).toUpperCase() + base.slice(1);
  return {
    className: `${className}${classSuffix}`,
    fileName: `${base}s/${fileName}.${base}`,
  }
}

export default async function (tree: Tree, schema: any) {
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
