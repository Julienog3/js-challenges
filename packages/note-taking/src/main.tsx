import './index.css';
import React from 'react';
import { createRoot } from 'react-dom/client';

import { Example } from './components/example.jsx';

const container = document.querySelector('#root');

if (container) {
	const root = createRoot(container);
	root.render(
		<React.StrictMode>
			<Example />
		</React.StrictMode>,
	);
}
