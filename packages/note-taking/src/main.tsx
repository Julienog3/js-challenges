import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app/app.js';

const rootElement = document.querySelector('#root');
if (!rootElement) throw new Error('Container element does not exist.')

const root = createRoot(rootElement);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);

