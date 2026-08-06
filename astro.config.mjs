// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://deviury.pages.dev',
	compressHTML: false,
	integrations: [
		sitemap(),
	],
});
