import { Prompt } from '@poppinss/prompts';

import { GitCli } from './main.js';

const prompt = new Prompt();
const cli = new GitCli(prompt);

await cli.run();
