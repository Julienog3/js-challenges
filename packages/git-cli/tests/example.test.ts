import assert from 'node:assert';
import test from 'node:test';

import { Prompt } from '@poppinss/prompts';

import { GitCli } from '../src/main.js';

void test('example', async () => {
	const prompt = new Prompt();
	const gitCli = new GitCli(prompt);

	prompt.trap('nom').replyWith('John Doe');

	const result = await gitCli.run();
	assert.strictEqual(result, 'John Doe');
});
