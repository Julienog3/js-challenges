import type { Currencies, LatestExchangeRate } from "../types/currency";

import { APIClient } from "./api_client";

const apiClient = APIClient.instance;

export async function fetchCurrencies(): Promise<Currencies> {
  return await apiClient.makeRequest<Currencies>({ endpoint: 'v1/currencies', isCached: true })
}

export async function fetchLatestExchangeRates(base: string, target: string) {
  return await apiClient.makeRequest<LatestExchangeRate>({ 
    endpoint: 'v1/latest', 
    searchParams: { 
      'base_currency': base, 
      'currencies': target
    } 
  })

}