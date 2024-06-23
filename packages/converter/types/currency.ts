export type Currencies = Record<string, {
    symbol: string
    name: string
    symbol_native: string
    decimal_digits: number
    code: string
    name_plural: string
    rounding: number
    type: string
  }>;

export type LatestExchangeRate = Record<string, number>

export interface Conversion {
  baseCurrency: string
  targetCurrency: string
  convertedAt: string
}

export type APIResponse<T> = { data: T } 