import {readFileSync} from "fs";
import {SymbolObject} from "./api-json.types";

const getAllEntities = require("@ui5/tooling-webc/lib/generate/utils/getAllEntities.js");

const combinedProperties = (current, ...bases) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseProperties = combinedProperties(base, ...bases).reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseProperties,
        ...(current.properties || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.properties || [];
}

const combinedEvents = (current, ...bases) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseEvents = combinedEvents(base, ...bases).reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseEvents,
        ...(current.events || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.events || [];
}

const combinedSlots = (current, ...bases) => {
  if (current.extends && current.extends !== 'sap.ui.webcomponents.base.UI5Element') {
    const base = bases.find(b => b[current.extends])?.[current.extends];
    if (base) {
      const baseEvents = combinedSlots(base, ...bases).reduce((acc, p) => {
        acc[p.name] = p;
        return acc;
      }, {});
      return Object.values({
        ...baseEvents,
        ...(current.slots || []).reduce((acc, p) => {
          acc[p.name] = p;
          return acc;
        }, {}),
      });
    }
  }
  return current.slots || [];
}

export function indexApiJson() {
  const implementers: Record<string, SymbolObject[]> = {};

  const baseApiJson = JSON.parse(readFileSync('./ui5-base.api.json', 'utf8')).symbols.reduce((acc, next) => {
    acc[next.name] = next;
    next.resource = `@ui5/webcomponents-base/dist/${next.resource}`;
    return acc;
  }, {});
  const fioriApiJson = JSON.parse(readFileSync('./ui5-fiori-api-mock.json', 'utf8')).symbols.reduce((acc, next) => {
    acc[next.name] = next;
    next.resource = `@ui5/webcomponents-fiori/dist/${next.resource}`;
    return acc;
  }, {});
  const webcomponentsApiJson = JSON.parse(readFileSync('./ui5-api-mock.json', 'utf8')).symbols.reduce((acc, next) => {
    acc[next.name] = next;
    next.resource = `@ui5/webcomponents/dist/${next.resource}`;
    return acc;
  }, {});

  Object.entries(baseApiJson).forEach(([name, symbol]) => {
    symbol['properties'] = combinedProperties(symbol, baseApiJson);
    symbol['events'] = combinedEvents(symbol, baseApiJson);
    symbol['slots'] = combinedSlots(symbol, baseApiJson);
  });

  Object.entries(fioriApiJson).forEach(([name, symbol]) => {
    symbol['properties'] = combinedProperties(symbol, fioriApiJson, baseApiJson);
    symbol['events'] = combinedEvents(symbol, fioriApiJson, baseApiJson);
    symbol['slots'] = combinedSlots(symbol, fioriApiJson, baseApiJson);
  });
  Object.entries(webcomponentsApiJson).forEach(([name, symbol]) => {
    symbol['properties'] = combinedProperties(symbol, webcomponentsApiJson, fioriApiJson, baseApiJson);
    symbol['events'] = combinedEvents(symbol, webcomponentsApiJson, fioriApiJson, baseApiJson);
    symbol['slots'] = combinedSlots(symbol, webcomponentsApiJson, fioriApiJson, baseApiJson);
  });

  const symbols = Object.values({
    ...baseApiJson,
    ...fioriApiJson,
    ...webcomponentsApiJson
  } as any).reduce((acc, next: SymbolObject) => {
    const formProperties = next.properties.filter(p => p.formProperty as unknown as string === 'true');
    if (formProperties.length > 0) {
      next.formData = formProperties.map(p => {
        return {
          propertyName: p.name,
          events: (p.formEvents as unknown as string).split(',').filter(Boolean)
        }
      })
    }

    next.slots = next.slots || [];
    next.implements = next.implements || [];
    next.implements.forEach(i => {
      if (!implementers[i]) {
        implementers[i] = [];
      }
      implementers[i].push(next);
    });
    acc[next.name] = next;
    // if (next.tagname === 'ui5-range-slider') {
    //   console.log(next);
    // }
    return acc;
  }, {}) as unknown as Record<string, SymbolObject>;
  return {symbols, implementers};
}
