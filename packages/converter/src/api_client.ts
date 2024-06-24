import type { APIResponse } from "../types/currency"

const BASE_URL = import.meta.env.VITE_CONVERTER_API_URL
const API_KEY = import.meta.env.VITE_CONVERTER_API_KEY

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
type RequestParameters = {
  endpoint: string
  isCached?: boolean
  method?: Method
  searchParams?: Record<string, string>
}

export class APIClient {
  static #instance: APIClient

  private constructor() {} 

  public static get instance(): APIClient {
    if (!APIClient.#instance) {
      APIClient.#instance = new APIClient();
    }

    return APIClient.#instance;
  }

  public async makeRequest<T>(parameters: RequestParameters) {
    const { endpoint, method = 'GET', isCached = false, searchParams } = parameters

    const url = new URL(endpoint, BASE_URL)
    url.searchParams.append('apikey', API_KEY)

    if (searchParams) {
      for (const [key, value] of Object.entries(searchParams)) {
        url.searchParams.append(key, value)
      }
    }

    const response = await this.getCachedResponseOrFetch(url, method, isCached)
    
    if (isCached) {
      const cache = await caches.open('request-cache');
      await cache.put(url, response.clone())
    }
    
    const { data } = await response.json() as APIResponse<T>
    return data
  }

  private async getCachedResponseOrFetch(url: URL, method: Method, isCached: boolean): Promise<Response> {
    if (isCached) {
      const cache = await caches.open('request-cache');
      const cachedResponse = await cache.match(url);
      
      if (cachedResponse) {
        return cachedResponse;
      }
    }

    return fetch(url, { method });
  }
}