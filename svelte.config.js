import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			// See below for an explanation of these options
			routes: {
			  include: ['/*'],
			  exclude: ['<all>']
			}
		})
	}
};

export default config;
