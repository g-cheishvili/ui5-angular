import {formatFiles, generateFiles, names, Tree} from '@nrwl/devkit';
import {existsSync, rmSync} from "fs";
import {indexApiJson} from "./index-api-json";
import {getComponents} from "./get-components";

const {symbols, implementers} = indexApiJson();
const components = getComponents({symbols, implementers});

const directiveImport = (ui5ClassName: Record<string, string> | string, base: string) => {
  const {className, fileName} = typeof ui5ClassName === 'string' ? names(ui5ClassName) : ui5ClassName;
  const classSuffix = base.charAt(0).toUpperCase() + base.slice(1);
  return {
    className: `${className}${classSuffix}`,
    fileName: `${base}s/${fileName}.${base}`,
  }
}

export default async function (tree: Tree) {
  if (existsSync('libs/ui5-angular/src')) {
    rmSync('libs/ui5-angular/src', {recursive: true});
  }
  const directives = [];
  for (const component of components) {
    const namings = component.componentNames;

    const formData = component.formData;

    if (formData) {
      generateFiles(tree, `${__dirname}/files/cva`, `libs/ui5-angular/src/lib/cvas`, {
        ...namings,
        selector: component.selector,
        formData,
        events: Object.values(formData.reduce((acc, next) => {
          next.events.forEach(e => {
            acc[e.name] = e;
          });
          return acc;
        }, {}))
      });
      directives.push(directiveImport(namings, 'cva'));
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
