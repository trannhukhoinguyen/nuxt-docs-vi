import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import catppuccin from 'starlight-theme-catppuccin'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			customCss: [
				'@fontsource/inter/400.css',
				'@fontsource/inter/600.css',
				'./src/custom.css'
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
			plugins: [
				catppuccin()
			]
		}),
	],
});
