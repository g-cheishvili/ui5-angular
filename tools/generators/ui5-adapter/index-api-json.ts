import {readFileSync} from "fs";
import {SymbolObject} from "./api-json.types";

const getAllEntities = require("@ui5/tooling-webc/lib/generate/utils/getAllEntities.js");

export function indexApiJson() {
  const symbols: Record<string, SymbolObject> = getAllEntities([
    readFileSync('./ui5-api-mock.json', 'utf8'),
    readFileSync('./ui5-fiori-api-mock.json', 'utf8')
  ]).reduce((acc, next: SymbolObject) => {
    const packageName = ((spl) => spl[3])(next.name.split('.'));

    next.resource = `@ui5/webcomponents${packageName === 'fiori' ? '-fiori' : ''}/dist/${next.resource}`;
    acc[next.basename] = next;
    return acc;
  }, {});
  const implementers: Record<string, SymbolObject[]> = {};

  (Object.values(symbols)).forEach((symbol: SymbolObject) => {
    symbol.formAssociated = (symbol.formAssociated as unknown as string) === 'true';
    symbol.formProperties = (symbol.formProperties as unknown as string || '').split(',');
    if (symbol.formProperties.length > 1) {
      debugger;
    }
    symbol.properties = symbol.properties || [];
    symbol.events = symbol.events || [];
    symbol.slots = symbol.slots || [];
    symbol.implements = symbol.implements || [];
    if (symbol.tagname === 'ui5-bar') {
      debugger;
    }
    for (const property of symbol.properties) {
      property.formEvents = ((typeof property.formEvents === 'string' ? [property.formEvents] : property.formEvents) || []).filter(Boolean);
    }
    if (symbol.implements) {
      symbol.implements.forEach((interfaceName) => {
        if (!implementers[interfaceName]) {
          implementers[interfaceName] = [];
        }
        implementers[interfaceName].push(symbol);
      });
    }
  });
  return {symbols, implementers};
}
