import type { Currencies } from "../types/currency";

const BASE_URL = import.meta.env.VITE_CONVERTER_API_URL

export async function fetchCurrencies(): Promise<Currencies> {
  const url = new URL('v1/currencies', BASE_URL)
  url.searchParams.append('apikey',import.meta.env.VITE_CONVERTER_API_KEY)

  const response = await fetch(url)
  const { data } = await response.json();
  return data
}

export async function fetchLatestExchangeRates(base: string, target: string) {
  const url = new URL('v1/latest', BASE_URL)
  url.searchParams.append('apikey',import.meta.env.VITE_CONVERTER_API_KEY)
  url.searchParams.append('base_currency', base)
  url.searchParams.append('currencies', target)

  const response = await fetch(url)
  const { data } = await response.json();
  return data
}