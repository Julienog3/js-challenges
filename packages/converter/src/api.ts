import type { Currencies } from "../types/currency";

const BASE_URL = import.meta.env.VITE_CONVERTER_API_URL
const API_KEY = import.meta.env.VITE_CONVERTER_API_KEY

export async function fetchCurrencies(): Promise<Currencies> {
  const cache = await caches.open('currencies-cache');

  const url = new URL('v1/currencies', BASE_URL)
  url.searchParams.append('apikey', API_KEY)

  const cachedResponse = await cache.match(url)

  if (cachedResponse) {
    const { data } = await cachedResponse.json();
    return data
  }

  const response = await fetch(url)
  const data = await response.clone();
  await cache.put(url, data)

  return data.json()
}

export async function fetchLatestExchangeRates(base: string, target: string) {
  const url = new URL('v1/latest', BASE_URL)
  url.searchParams.append('apikey', API_KEY)
  url.searchParams.append('base_currency', base)
  url.searchParams.append('currencies', target)

  const response = await fetch(url)
  const { data } = await response.json();
  return data
}