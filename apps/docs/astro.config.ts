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
                  label: "Nuxt Lifecycle",
                  slug: "guide/key-concepts/nuxt-lifecycle"
                },
                {
                  label: "Vue.js Development",
                  slug: "guide/key-concepts/vuejs-development"
                },
                {
                  label: "Rendering Modes",
                  slug: "guide/key-concepts/rendering-modes"
                },
                {
                  label: "Server Engine",
                  slug: "guide/key-concepts/server-engine"
                },
                {
                  label: "Modules",
                  slug: "guide/key-concepts/modules"
                },
                {
                  label: "ES Modules",
                  slug: "guide/key-concepts/es-modules"
                },
                {
                  label: "TypeScript",
                  slug: "guide/key-concepts/typescript"
                },
                {
                  label: "Code Style",
                  slug: "guide/key-concepts/code-style"
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
                  label: ".output",
                  slug: "guide/directory-structure/output"
                },
                {
                  label: "app",
                  items: [
                    { label: "assets", slug: "guide/directory-structure/app/assets" },
                    { label: "components", slug: "guide/directory-structure/app/components" },
                    { label: "composables", slug: "guide/directory-structure/app/composables" },
                    { label: "layouts", slug: "guide/directory-structure/app/layouts" },
                    { label: "middleware", slug: "guide/directory-structure/app/middleware" },
                    { label: "pages", slug: "guide/directory-structure/app/pages" },
                    { label: "plugins", slug: "guide/directory-structure/app/plugins" },
                    { label: "utils", slug: "guide/directory-structure/app/utils" },
                    { label: "app.vue", slug: "guide/directory-structure/app/app" },
                    { label: "app.config.ts", slug: "guide/directory-structure/app/app-config" },
                    { label: "error.vue", slug: "guide/directory-structure/app/error" },
                  ],
                },
                {
                  label: "content",
                  slug: "guide/directory-structure/content"
                },
                {
                  label: "modules",
                  slug: "guide/directory-structure/modules"
                },
                {
                  label: "node_modules",
                  slug: "guide/directory-structure/node-modules"
                },
                {
                  label: "public",
                  slug: "guide/directory-structure/public"
                },
                {
                  label: "server",
                  slug: "guide/directory-structure/server"
                },
                {
                  label: "shared",
                  slug: "guide/directory-structure/shared"
                },
                {
                  label: ".env",
                  slug: "guide/directory-structure/env"
                },
                {
                  label: ".gitignore",
                  slug: "guide/directory-structure/gitignore"
                },
                {
                  label: ".nuxtignore",
                  slug: "guide/directory-structure/nuxtignore"
                },
                {
                  label: ".nuxtrc",
                  slug: "guide/directory-structure/nuxtrc"
                },
                {
                  label: "nuxt.config.ts",
                  slug: "guide/directory-structure/nuxt-config"
                },
                {
                  label: "package.json",
                  slug: "guide/directory-structure/package"
                },
                {
                  label: "tsconfig.json",
                  slug: "guide/directory-structure/tsconfig"
                },
              ]
            },
						{
              label: "Going Further",
              items: [
                {
                  label: "Events",
                  slug: "guide/going-further/events"
                },
                {
                  label: "Experimental Features",
                  slug: "guide/going-further/experimental-features"
                },
                {
                  label: "Features",
                  slug: "guide/going-further/features"
                },
                {
                  label: "How Nuxt Works?",
                  slug: "guide/going-further/how-nuxt-works"
                },
                {
                  label: "Runtime Config",
                  slug: "guide/going-further/runtime-config"
                },
                {
                  label: "Nightly Release Channel",
                  slug: "guide/going-further/nightly-release-channel"
                },
                {
                  label: "Lifecycle Hooks",
                  slug: "guide/going-further/lifecycle-hooks"
                },
                {
                  label: "Module Author Guide",
                  slug: "guide/going-further/module-author-guide"
                },
                {
                  label: "Nuxt Kit",
                  slug: "guide/going-further/nuxt-kit"
                },
                {
                  label: "NuxtApp",
                  slug: "guide/going-further/nuxtapp"
                },
                {
                  label: "Authoring Nuxt Layers",
                  slug: "guide/going-further/authoring-nuxt-layers"
                },
                {
                  label: "Debugging",
                  slug: "guide/going-further/debugging"
                },
              ]
            },
						{
              label: "Recipes",
              items: [
                {
                  label: "Custom Routing",
                  slug: "guide/recipes/custom-routing"
                },
                {
                  label: "Vite Plugins",
                  slug: "guide/recipes/vite-plugins"
                },
                {
                  label: "Custom useFetch",
                  slug: "guide/recipes/custom-usefetch"
                },
                {
                  label: "Sessions and Authentication",
                  slug: "guide/recipes/sessions-and-authentication"
                },
              ]
            },
						{
              label: "Best Practices",
              items: [
                {
                  label: "Nuxt and hydration",
                  slug: "guide/best-practices/hydration"
                },
                {
                  label: "Nuxt Performance",
                  slug: "guide/best-practices/nuxt-performance"
                },
                {
                  label: "Nuxt Plugins",
                  slug: "guide/best-practices/nuxt-plugins"
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
                {
                  label: "<DevOnly>",
                  slug: "api/components/dev-only"
                },
                {
                  label: "<NuxtClientFallback>",
                  slug: "api/components/nuxt-client-fallback"
                },
                {
                  label: "<NuxtPicture>",
                  slug: "api/components/nuxt-picture"
                },
                {
                  label: "<Teleport>",
                  slug: "api/components/teleport"
                },
                {
                  label: "<NuxtRouteAnnouncer>",
                  slug: "api/components/nuxt-route-announcer"
                },
                {
                  label: "<NuxtTime>",
                  slug: "api/components/nuxt-time"
                },
                {
                  label: "<NuxtPage>",
                  slug: "api/components/nuxt-page"
                },
                {
                  label: "<NuxtLayout>",
                  slug: "api/components/nuxt-layout"
                },
                {
                  label: "<NuxtLink>",
                  slug: "api/components/nuxt-link"
                },
                {
                  label: "<NuxtLoadingIndicator>",
                  slug: "api/components/nuxt-loading-indicator"
                },
                {
                  label: "<NuxtErrorBoundary>",
                  slug: "api/components/nuxt-error-boundary"
                },
                {
                  label: "<NuxtWelcome>",
                  slug: "api/components/nuxt-welcome"
                },
                {
                  label: "<NuxtIsland>",
                  slug: "api/components/nuxt-island"
                },
                {
                  label: "<NuxtImg>",
                  slug: "api/components/nuxt-img"
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
						{
              label: "Utils",
              items: [
                {
                  label: "$fetch",
                  slug: "api/utils/fetch"
                },
              ]
            },
						{
              label: "Commands",
              items: [
                {
                  label: "nuxt add",
                  slug: "api/commands/nuxt add"
                },
              ]
            },
						{
              label: "Nuxt Kit",
              items: [
                {
                  label: "Modules",
                  slug: "api/nuxt-kit/modules"
                },
              ]
            },
						{
              label: "Advanced",
              items: [
                {
                  label: "Lifecycle Hooks",
                  slug: "api/advanced/lifecycle-hooks"
                },
                {
                  label: "Import meta",
                  slug: "api/advanced/import-meta"
                },
              ]
            },
						{
              label: "Nuxt Configuration",
              slug: "api/nuxt-config"
            },
					],
				},
			],
			plugins: [catppuccin()],
		}),
	],
});
/*


useAppConfig
useAsyncData
useCookie
useError
useFetch
useHead
useHeadSafe
useHydration
useLazyAsyncData
useLazyFetch
useLoadingIndicator
useNuxtApp
useNuxtData
usePreviewMode
useRequestEvent
useRequestFetch
useRequestHeader
useRequestHeaders
useRequestURL
useResponseHeader
useRoute
useRouteAnnouncerNew
useRouter
useRuntimeConfig
useRuntimeHook
useSeoMeta
useServerSeoMeta
useState

3. Utils

abortNavigation
addRouteMiddleware
callOnceNew
clearError
clearNuxtData
clearNuxtState
createError
defineLazyHydrationComponent
defineNuxtComponent
defineNuxtPlugin
defineNuxtRouteMiddleware
definePageMeta
defineRouteRules
navigateTo
onBeforeRouteLeave
onBeforeRouteUpdate
onNuxtReady
prefetchComponents
preloadComponents
preloadRouteComponents
prerenderRoutes
refreshCookieNew
refreshNuxtData
reloadNuxtApp
setPageLayout
setResponseStatus
showError
updateAppConfig

4. Commands
nuxt add
nuxt analyze
nuxt build
nuxt build-module
nuxt cleanup
nuxt dev
nuxt devtools
nuxt generate
nuxt info
create nuxt
nuxt module
nuxt prepare
nuxt preview
nuxt typecheck
nuxt upgrade

5. Nuxt Kit

Runtime Config
Templates
Nitro
Resolving
Logging
Builder
Examples
Programmatic Usage
Compatibility
Auto-imports
Components
Context
Pages
Layout
Plugins



* */
