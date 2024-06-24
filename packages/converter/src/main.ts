import './style.css';
import type { Conversion, Currencies } from '../types/currency';

import { fetchCurrencies, fetchLatestExchangeRates } from './api';
import { calculateValue } from './utils';

const baseCurrencySelect = document.querySelector<HTMLSelectElement>('#base-currency')
const targetCurrencySelect = document.querySelector<HTMLSelectElement>('#target-currency')
const valueElement = document.querySelector<HTMLInputElement>('#value')
const formElement = document.querySelector<HTMLFormElement>('#form')
const resultElement = document.querySelector<HTMLParagraphElement>('#result')
const conversionsTableElement = document.querySelector<HTMLTableElement>('#conversions-table tbody')

let baseCurrency: string;
let targetCurrency: string;

let currencies: Currencies;

if (!baseCurrencySelect || !targetCurrencySelect || !formElement || !conversionsTableElement) {
  throw new Error('Elements not defined')
}

export function populateSelectWithCurrencies(element: Element, currencies: Currencies) {
  for (const currency of Object.keys(currencies)) {
    const option = document.createElement('option')
    option.setAttribute('value', currency)

    const label = document.createTextNode(currency);
    option.append(label)

    element.append(option)
  }
}

function saveConversion(base: string, result: string) {
  const conversion: Conversion = {
    baseCurrency: base,
    targetCurrency: result,
    convertedAt: new Date().toLocaleString()
  }

  if (!conversionsTableElement) return

  const tableRowElement = createTableRow(Object.values(conversion) as Array<string>)
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

async function convertCurrency(value: number) {
  const ratio = await fetchLatestExchangeRates(baseCurrency, targetCurrency)
  return calculateValue(value, ratio, targetCurrency)
}

baseCurrencySelect.addEventListener('input', (event) => {
  if (!(event.target instanceof HTMLSelectElement)) return;
  baseCurrency = event.target.value
})

targetCurrencySelect.addEventListener('input', (event) => {
  if (!(event.target instanceof HTMLSelectElement)) return;
  targetCurrency = event.target.value
})

async function submitConversion() {
  if (!valueElement || !resultElement) return
  
  const value = +valueElement.value
  const result = await convertCurrency(value)

  const currency = currencies[targetCurrency]

  const baseLabel = `${value.toFixed(2)} ${baseCurrency}`
  const resultLabel = `${result} ${currency?.symbol}`
  
  saveConversion(baseLabel, resultLabel)
  displayConversionResult(resultLabel)
}

async function setup() {
  currencies = await fetchCurrencies()

  if (!baseCurrencySelect || !targetCurrencySelect) {
    throw new Error('Elements not defined.')
  }

  populateSelectWithCurrencies(baseCurrencySelect, currencies)
  populateSelectWithCurrencies(targetCurrencySelect, currencies) 
}

window.addEventListener('load', () => {
  void setup()
})

formElement.addEventListener('submit', (event) => {
  event.preventDefault()
  event.stopPropagation()

  void submitConversion()
})