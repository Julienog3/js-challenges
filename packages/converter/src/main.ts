import './style.css';
import type { Conversion, Currencies } from '../types/currency';

import { fetchCurrencies, fetchLatestExchangeRates } from './api';

const baseCurrencyElement = document.querySelector<HTMLSelectElement>('#base-currency')
const targetCurrencyElement = document.querySelector<HTMLSelectElement>('#target-currency')
const valueElement = document.querySelector<HTMLInputElement>('#value')
const formElement = document.querySelector<HTMLFormElement>('#form')
const resultElement = document.querySelector<HTMLParagraphElement>('#result')
const conversionsTableElement = document.querySelector<HTMLTableElement>('#conversions-table tbody')

let baseCurrency: string;
let targetCurrency: string;

const currencies = await fetchCurrencies()

if (!baseCurrencyElement || !targetCurrencyElement || !formElement || !conversionsTableElement) {
  throw new Error('Elements not defined')
}

export function addCurrenciesToElement(element: Element, currencies: Currencies) {
  for (const currency of Object.keys(currencies)) {
    const option = document.createElement('option')
    option.setAttribute('value', currency)
    const label = document.createTextNode(currency);
    option.append(label)
    element.append(option)
  }
}

async function convertCurrency(value: number, base: string, target: string) {
  const ratio = await fetchLatestExchangeRates(base, target)
  return value * ratio[target]
}

function saveConversion(base: string, result: string) {
  const conversion: Conversion = {
    baseCurrency: base,
    targetCurrency: result,
    convertedAt: new Date().toLocaleString()
  }

  if (!conversionsTableElement) return

  const tableRowElement = createTableRow(Object.values(conversion))
  conversionsTableElement.prepend(tableRowElement)
}

function displayConversionResult(resultLabel: string) {
  if (!resultElement) return

  const label = document.createTextNode(`Le résultat est de ${resultLabel}`);
  resultElement.innerHTML = ''
  resultElement.append(label)
}

function createTableRow(columns: Array<string>) {
  const rowElement = document.createElement('tr')
  for (const column of Object.values(columns)) {
    const columnElement = document.createElement('td')
    columnElement.innerHTML = column
    rowElement.append(columnElement)
  }
  return rowElement
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

  const baseLabel = `${value.toFixed(2)} ${baseCurrency}`
  const resultLabel = `${result.toFixed(2)} ${currency?.symbol}`
  
  saveConversion(baseLabel, resultLabel)
  displayConversionResult(resultLabel)
})