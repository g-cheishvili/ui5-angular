export interface Constructor {
  visibility: string;
}

export interface Property {
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

export interface RootObject {
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
  symbols: RootObject[]
}

export function indexApiJson(ui5ApiJson: ApiJson) {
  const symbols: Record<string, RootObject> = {};
  const implementers: Record<string, RootObject[]> = {};

  ui5ApiJson.symbols.forEach((symbol) => {
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
  return {symbols, implementers};
}
