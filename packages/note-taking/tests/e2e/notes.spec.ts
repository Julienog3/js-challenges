import type { NoteDTO } from '../../src/types/note';

import { test, expect } from '@playwright/test';

const noteToAdd: NoteDTO = {
	title: 'Note de test',
	content: 'Lorem ipsum dolore sit amet'
}

test('has title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle('Note-taking App');
});

test('should create note', async ({ page }) => {
	await page.goto('/');

	await page.getByTestId('add-note-btn').click()

	await page.getByTestId('note-title-input').fill(noteToAdd.title)
	await page.getByTestId('note-content-input').fill(noteToAdd.content)

	await page.getByTestId('submit-note-btn').click()
	
	await expect(page.getByTestId('notes-list').last()).toContainText(noteToAdd.title)
});
