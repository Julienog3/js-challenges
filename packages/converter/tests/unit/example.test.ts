import { describe, expect, it } from 'vitest';
import { addCurrenciesToElement } from '../../src/main';

const MOCK_CURRENCIES = {
	"EUR": {
		"symbol": "€",
		"name": "Euro",
		"symbol_native": "€",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "EUR",
		"name_plural": "Euros",
		"type": "fiat"
	},
	"USD": {
		"symbol": "$",
		"name": "US Dollar",
		"symbol_native": "$",
		"decimal_digits": 2,
		"rounding": 0,
		"code": "USD",
		"name_plural": "US dollars",
		"type": "fiat"
	},
	"JPY": {
		"symbol": "¥",
		"name": "Japanese Yen",
		"symbol_native": "￥",
		"decimal_digits": 0,
		"rounding": 0,
		"code": "JPY",
		"name_plural": "Japanese yen",
		"type": "fiat"
	}  
}

describe('Currencies converter', () => {
	it('Should display currencies in select element', () => {
		const selectElement = document.createElement('select')
		
		addCurrenciesToElement(selectElement, MOCK_CURRENCIES)
		expect(selectElement.options.length).toBeGreaterThan(0);
	}) 
	// it('Should convert currency', async () => {
	// 	const base = 'EUR'
	// 	const target = 'USD'

	// 	await fetchLatestExchangeRates(base, target)
	// })
})
