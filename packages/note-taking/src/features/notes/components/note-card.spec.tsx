import type { Note } from '../../../types/note.ts';

import { screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { render } from '../../../../tests/utils.ts';

import { NoteCard } from './note-card.tsx'

const note: Note = {
	id: '44b8e6fd-80cc-4404-82ad-485fb91de534',
	title: 'Exemple de note',
	content: 'Lorem ipsum dolores sit amet',
	createdAt: new Date().toLocaleString(),
	updatedAt: new Date().toLocaleString()
}

describe('Component', () => {
	it('should render', ({ expect }) => {
		render(<NoteCard note={note} />);
		expect(screen.getByTestId('note-card')).toBeInTheDocument();
	});
});
