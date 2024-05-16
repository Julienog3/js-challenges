import type { Prompt } from '@poppinss/prompts';

export class GitCli {
	#prompt: Prompt;

	constructor(prompt: Prompt) {
		this.#prompt = prompt;
	}

	async run() {
		return await this.#prompt.ask('nom');
	}
}
