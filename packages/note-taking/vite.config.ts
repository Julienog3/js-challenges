/// <reference types="vitest" />
/// <reference types="vite-plugin-svgr/client" />
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
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
