import { describe, it } from 'vitest';
import { addCurrenciesToElement } from '../../src/main';
import type { Currencies } from '../../types/currency';
import { fetchLatestExchangeRates } from '../../src/api';

const CURRENCIES: Currencies = {
	EUR: {
		symbol: "€", 
		name: "Euro", 
		symbol_native: "€", 
		decimal_digits: 2, 
		rounding: 0, 
		code: "EUR",
		type: "fiat",
		name_plural: "Euros"
	},
	AUD: {
		symbol: "AU$", 
		name: "Australian Dollar", 
		symbol_native: "$", 
		decimal_digits: 2, 
		rounding: 0,
		code: "AUD",
		type: "fiat",
		name_plural: "Australian dollars"
	},
}

describe('Converter', () => {
	it('Should convert currency', async () => {
		const base = 'EUR'
		const target = 'USD'

		await fetchLatestExchangeRates(base, target)
	})
})
