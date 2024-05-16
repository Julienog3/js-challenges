import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { render } from '../../tests/utils.js';

import { Example } from './example.jsx';

describe('Component', () => {
	it('should render', ({ expect }) => {
		render(<Example />);
		expect(screen.getByText('coucou les gens')).toBeInTheDocument();
	});
});
