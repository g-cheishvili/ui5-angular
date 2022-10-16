export interface Constructor {
  visibility: string;
}

export interface Property {
  formEvents: string[];
  name: string;
  visibility: string;
  since: string;
  type: string;
  description: string;
  defaultValue: string;
}

export interface Slot {
  name: string;
  propertyName: string;
  visibility: string;
  since: string;
  type: string;
  description: string;
}

export interface Parameter {
  name: string;
  type: string;
  description: string;
}

export interface Event {
  name: string;
  visibility: string;
  since: string;
  parameters: Parameter[];
  description: string;
}

export interface SymbolObject {
  formProperties: string[];
  formAssociated: boolean;
  kind: string;
  name: string;
  basename: string;
  tagname: string;
  resource: string;
  module: string;
  static: boolean;
  visibility: string;
  since: string;
  extends: string;
  implements: string[];
  description: string;
  constructor: Constructor;
  properties: Property[];
  slots: Slot[];
  events: Event[];
}


type ApiJson = {
  symbols: SymbolObject[]
}

export function indexApiJson(ui5ApiJson: ApiJson) {
  const symbols: Record<string, SymbolObject> = {};
  const implementers: Record<string, SymbolObject[]> = {};

  ui5ApiJson.symbols.forEach((symbol) => {
    symbols[symbol.basename] = symbol;
    symbol.formAssociated = (symbol.formAssociated as unknown as string) === 'true';
    symbol.formProperties = (symbol.formProperties as unknown as string || '').split(',');
    symbol.properties = symbol.properties || [];
    symbol.events = symbol.events || [];
    symbol.slots = symbol.slots || [];
    symbol.implements = symbol.implements || [];
    for (const property of symbol.properties) {
      property.formEvents = (property.formEvents as unknown as string || '').split(',');
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
