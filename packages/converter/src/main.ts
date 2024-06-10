import './style.css';
import { fetchCurrencies, fetchLatestExchangeRates } from './api';
import type { Currencies } from '../types/currency';

const baseCurrencyElement = document.querySelector<HTMLSelectElement>('#base-currency')
const targetCurrencyElement = document.querySelector<HTMLSelectElement>('#target-currency')
const valueElement = document.querySelector<HTMLInputElement>('#value')
const formElement = document.querySelector<HTMLFormElement>('#form')
const resultElement = document.querySelector<HTMLParagraphElement>('#result')

let baseCurrency: string;
let targetCurrency: string;

const currencies = await fetchCurrencies()

if (!baseCurrencyElement || !targetCurrencyElement || !formElement) {
  throw new Error('Elements not defined')
}

export function addCurrenciesToElement(element: Element, currencies: Currencies) {
  Object.keys(currencies).forEach((currency) => {
    const option = document.createElement('option')
    option.setAttribute('value', currency)
    const label = document.createTextNode(currency);
    option.appendChild(label)
    element.appendChild(option)
  })
}

async function convertCurrency(value: number, base: string, target: string) {
  const ratio = await fetchLatestExchangeRates(base, target)
  return value * ratio[target]
}

function displayConvertionResult(result: number, element: Element) {
  const label = document.createTextNode(`Le résultat est de ${result} ${currency?.symbol}`);
  element.innerHTML = ''
  element.appendChild(label)
}

addCurrenciesToElement(baseCurrencyElement, currencies)
addCurrenciesToElement(targetCurrencyElement, currencies)

baseCurrencyElement.addEventListener('input', (e) => {
  if (!(e.target instanceof HTMLSelectElement)) return;
  baseCurrency = e.target.value
})

targetCurrencyElement.addEventListener('input', (e) => {
  if (!(e.target instanceof HTMLSelectElement)) return;
  targetCurrency = e.target.value
})

formElement.addEventListener('submit', async (e) => {
  e.preventDefault()

  if (!valueElement || !resultElement) return
  
  const value = +valueElement.value
  const result = await convertCurrency(value, baseCurrency, targetCurrency)

  const currency = currencies[targetCurrency]

  const label = document.createTextNode(`Le résultat est de ${result} ${currency?.symbol}`);
  resultElement.innerHTML = ''
  resultElement.appendChild(label)
})