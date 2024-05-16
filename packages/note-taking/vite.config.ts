/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	define: {
		'import.meta.vitest': 'undefined',
	},
	test: {
		globals: true,
		environment: 'jsdom',
		include: ['src/**/*.test.{ts,tsx}'],
		setupFiles: './tests/setup.ts',
	},
	server: {
		port: 4001,
	},
});
