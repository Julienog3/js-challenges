import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, afterEach, beforeAll } from 'vitest';

const mockServer = setupServer(
	http.get('/test', () => {
		return HttpResponse.json({ foo: 'bar' });
	}),
);

beforeAll(() => mockServer.listen({ onUnhandledRequest: 'error' }));
afterAll(() => mockServer.close());
afterEach(() => mockServer.resetHandlers());
