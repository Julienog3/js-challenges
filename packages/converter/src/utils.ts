import type { LatestExchangeRate } from "../types/currency"

export function calculateValue(value: number, ratio: LatestExchangeRate, target: string) {
  const targetCurrencyRatio = ratio[target]

  if (!targetCurrencyRatio) {
    throw new Error('Target currency ratio not found.')
  }

  return +(value * targetCurrencyRatio).toPrecision(3)
}