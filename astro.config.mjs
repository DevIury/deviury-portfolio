// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
	site: 'https://deviury.com.br',
	compressHTML: true,
	integrations: [
		sitemap(),
	],
});
