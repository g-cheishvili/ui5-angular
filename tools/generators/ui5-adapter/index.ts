import {formatFiles, generateFiles, names, Tree} from '@nrwl/devkit';
import {readFileSync, rmdirSync} from "fs";
import {indexApiJson} from "./index-api-json";
import {getComponents} from "./get-components";

// const ui5ApiJson = JSON.parse(readFileSync('./node_modules/@ui5/webcomponents/dist/api.json', 'utf8'));
const ui5ApiJson = JSON.parse(readFileSync('./ui5-api-mock.json', 'utf8'));

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
  rmdirSync('libs/ui5-angular/src', {recursive: true});
  const directives = [];
  for (const component of components) {
    const namings = component.componentNames;
    if (component.formData.length > 0) {
      console.log({formData: component.formData, name: component.selector});
    }
    component.slots.forEach(slot => {
      const tagNames = [];
      const slotNames = names([namings.fileName, slot.name].join('-'));
      if (slot.type !== 'HTMLElement' && slot.type !== 'Array<HTMLElement>') {
        slot.supportedElements.forEach(c => tagNames.push(`${c.selector}[${slotNames.fileName}]`))
      } else {
        tagNames.push(`[${slotNames.fileName}]`);
      }
      generateFiles(tree, `${__dirname}/files/slot`, `libs/ui5-angular/src/lib/slots`, {
        ...slotNames,
        slotName: slot.name,
        selector: tagNames.join(', '),
      })
      directives.push(directiveImport(slotNames, 'slot'));
    });
    generateFiles(tree, `${__dirname}/files/directive`, 'libs/ui5-angular/src/lib/directives', {
      ...namings,
      ui5ComponentPath: component.path,
      dependencies: component.dependencies,
      slots: component.slots,
      selector: component.selector,
      inputs: component.inputs,
      outputs: component.outputs,
    });
    directives.push(directiveImport(component.componentNames, 'directive'));
  }
  generateFiles(tree, `${__dirname}/files/module`, 'libs/ui5-angular/src/lib', {imports: directives})
  generateFiles(tree, `${__dirname}/files/other`, 'libs/ui5-angular/src', {imports: directives});
  await formatFiles(tree);
  return () => {
  };
}
