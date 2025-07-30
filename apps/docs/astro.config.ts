import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://starlight.catppuccin.com",
	integrations: [
		starlight({
			title: "Nuxt",
			logo: {
				src: "./src/assets/logo.png",
				alt: "Nuxt logo",
			},
			favicon: "/favicon.png",
			social: [
				{
					label: "GitHub",
					icon: "github",
					href: "#",
				},
			],
			expressiveCode: {
				themes: ["catppuccin-mocha", "catppuccin-latte"],
				styleOverrides: {
					textMarkers: {
						insBackground:
							"color-mix(in oklab, var(--sl-color-green-high) 25%, var(--sl-color-gray-6));",
						insBorderColor: "var(--sl-color-gray-5)",
						delBackground:
							"color-mix(in oklab, var(--sl-color-red-high) 25%, var(--sl-color-gray-6));",
						delBorderColor: "var(--sl-color-gray-5)",
					},
					codeBackground: "var(--sl-color-gray-6)",
				},
			},
			customCss: [
				"@fontsource/inter/400.css",
				"@fontsource/inter/600.css",
				"./src/custom.css",
			],
			sidebar: [
				{
					label: "Get Started",
					items: [
						{ label: "Introduction", slug: "get_started/introduction" },
            { label: "Installation", slug: "get_started/installation" },
            { label: "Configuration", slug: "get_started/configuration" },
            { label: "Views", slug: "get_started/views" },
            { label: "Assets", slug: "get_started/assets" },
            { label: "Styling", slug: "get_started/styling" },
            { label: "Routing", slug: "get_started/routing" },
            { label: "SEO and Meta", slug: "get_started/seo-meta" },
            { label: "Transitions", slug: "get_started/transitions" },
            { label: "Data Fetching", slug: "get_started/data-fetching" },
            { label: "State Management", slug: "get_started/state-management" },
            { label: "Error Handling", slug: "get_started/error-handling" },
            { label: "Server", slug: "get_started/server" },
            { label: "Layers", slug: "get_started/layers" },
            { label: "Prerendering", slug: "get_started/prerendering" },
            { label: "Deployment", slug: "get_started/deployment" },
            { label: "Testing", slug: "get_started/testing" },
            { label: "Upgrade Guide", slug: "get_started/upgrade" },
					],
				},
				{
					label: "Guide",
					items: [
						{
              label: "Key concepts",
              items: [
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/key-concepts/auto-imports"
                },
              ]
            },
						{
              label: "Directory Structure",
              items: [
                {
                  label: ".nuxt",
                  slug: "guide/directory-structure/nuxt"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
                {
                  label: "Auto-imports",
                  slug: "guide/directory-structure/auto-imports"
                },
              ]
            },
						{
              label: "Going Further",
              items: [
                {
                  label: "Auto-imports",
                  slug: "guide/going-further/auto-imports"
                },
              ]
            },
						{
              label: "Recipes",
              items: [
                {
                  label: "Auto-imports",
                  slug: "guide/recipes/auto-imports"
                },
              ]
            },
						{
              label: "Best Practices",
              items: [
                {
                  label: "Auto-imports",
                  slug: "guide/best-practices/auto-imports"
                },
              ]
            },
					],
				},
				{
					label: "API",
					items: [
						{
              label: "Components",
              items: [
                {
                  label: "<ClientOnly>",
                  slug: "api/components/client-only"
                },
              ]
            },
						{
              label: "Composables",
              items: [
                {
                  label: "onPrehydrate",
                  slug: "api/composables/on-prehydrate"
                },
              ]
            },
					],
				},
			],
			plugins: [catppuccin()],
		}),
	],
});



/*Nuxt Lifecycle
Vue.js Development
Rendering Modes
Server Engine
Modules
ES Modules
TypeScript
Code Style


.output
app
content
modules
node_modules
public
server
shared
  .env
  .gitignore
  .nuxtignore
  .nuxtrc
nuxt.config.ts
package.json
tsconfig.json

Events
Experimental Features
Features
How Nuxt Works?
  Runtime Config
Nightly Release Channel
Lifecycle Hooks
Module Author Guide
Nuxt Kit
NuxtApp
Authoring Nuxt Layers
Debugging

Custom Routing
Vite Plugins
Custom useFetch
Sessions and Authentication

Nuxt and hydration
Nuxt Performance
Nuxt Plugins*/
