import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		Icons({
			compiler: 'svelte',
			autoInstall: true
		})
	],
	server: {
		fs: {
			allow: ['./api', '..']
		}
	}
};

export default config;
