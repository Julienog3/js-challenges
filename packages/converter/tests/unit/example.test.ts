import { describe, expect, it } from 'vitest';

import { calculateValue } from '../../src/utils';


describe('Currencies converter', () => {
	it('Should calculate target currency with ratio', () => {
		const value = 5
		const ratio = {
			USD: 1.068649883
		}

		const valueCalculated = calculateValue(value, ratio, 'USD')
		expect(valueCalculated).toBe(5.34)
	}) 
})
