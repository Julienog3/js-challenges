/// <reference types="vitest" />
import { defineConfig } from 'vite';

export default defineConfig({
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		include: ['tests/unit/**/*.test.ts'],
		setupFiles: './tests/setup.ts',
	},
	server: {
		port: 4000,
	},
});
