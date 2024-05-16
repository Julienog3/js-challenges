import type { Queries, RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

export const user = userEvent.setup();

function customRenderer(component: ReactElement, options?: RenderOptions<Queries>) {
	return render(component, {
		wrapper: ({ children }) => children,
		...options,
	});
}

export { customRenderer as render };
