import { test as base } from "@playwright/test";

const fakeNow = new Date(2024, 4, 15, 13, 30, 48).valueOf();

export const test = base.extend({
  page: async ({ page }, use) => {      
    await page.route('https://api.freecurrencyapi.com/v1/currencies*', async (route) => {
      await route.fulfill({ json: {
        data: {
          EUR: {
            symbol: "€",
            name: "Euro",
            symbol_native: "€",
            decimal_digits: 2,
            rounding: 0,
            code: "EUR",
            name_plural: "Euros",
            type: "fiat"
          },
          USD: {
            symbol: "$",
            name: "US Dollar",
            symbol_native: "$",
            decimal_digits: 2,
            rounding: 0,
            code: "USD",
            name_plural: "US dollars",
            type: "fiat"
          },
          ZAR: {
            symbol: "R",
            name: "South African Rand",
            symbol_native: "R",
            decimal_digits: 2,
            rounding: 0,
            code: "ZAR",
            name_plural: "South African rand",
            type: "fiat"
          }
        }
      }});
    });

    await page.route('https://api.freecurrencyapi.com/v1/latest*', async (route) => {
      await route.fulfill({ json: {
        data: { 
          USD: 1.068649883
        }
      }});
    });

    await page.addInitScript(`{
      Date.now = () => {
        return ${fakeNow};
      }
      Date = class extends Date {
        constructor(...args) {
          (args.length === 0) ? super(${fakeNow}) : super(...args)
        }
      }
    }`);

    await use(page);
  },
});

export { expect } from "@playwright/test";