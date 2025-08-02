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
                {
                  label: "useAppConfig",
                  slug: "api/composables/use-app-config"
                },
                {
                  label: "useAsyncData",
                  slug: "api/composables/use-async-data"
                },
                {
                  label: "useCookie",
                  slug: "api/composables/use-cookie"
                },
                {
                  label: "useError",
                  slug: "api/composables/use-error"
                },
                {
                  label: "useFetch",
                  slug: "api/composables/use-fetch"
                },
                {
                  label: "useHead",
                  slug: "api/composables/use-head"
                },
                {
                  label: "useHeadSafe",
                  slug: "api/composables/use-head-safe"
                },
                {
                  label: "useHydration",
                  slug: "api/composables/use-hydration"
                },
                {
                  label: "useLazyAsyncData",
                  slug: "api/composables/use-lazy-async-data"
                },
                {
                  label: "useLazyFetch",
                  slug: "api/composables/use-lazy-fetch"
                },
                {
                  label: "useLoadingIndicator",
                  slug: "api/composables/use-loading-indicator"
                },
                {
                  label: "useNuxtApp",
                  slug: "api/composables/use-nuxt-app"
                },
                {
                  label: "useNuxtData",
                  slug: "api/composables/use-nuxt-data"
                },
                {
                  label: "usePreviewMode",
                  slug: "api/composables/use-preview-mode"
                },
                {
                  label: "useRequestEvent",
                  slug: "api/composables/use-request-event"
                },
                {
                  label: "useRequestFetch",
                  slug: "api/composables/use-request-fetch"
                },
                {
                  label: "useRequestHeader",
                  slug: "api/composables/use-request-header"
                },
                {
                  label: "useRequestHeaders",
                  slug: "api/composables/use-request-headers"
                },
                {
                  label: "useRequestURL",
                  slug: "api/composables/use-request-url"
                },
                {
                  label: "useResponseHeader",
                  slug: "api/composables/use-response-header"
                },
                {
                  label: "useRoute",
                  slug: "api/composables/use-route"
                },
                {
                  label: "useRouteAnnouncerNew",
                  slug: "api/composables/use-route-announcer-new"
                },
                {
                  label: "useRouter",
                  slug: "api/composables/use-router"
                },
                {
                  label: "useRuntimeConfig",
                  slug: "api/composables/use-runtime-config"
                },
                {
                  label: "useRuntimeHook",
                  slug: "api/composables/use-runtime-hook"
                },
                {
                  label: "useSeoMeta",
                  slug: "api/composables/use-seo-meta"
                },
                {
                  label: "useServerSeoMeta",
                  slug: "api/composables/use-server-seo-meta"
                },
                {
                  label: "useState",
                  slug: "api/composables/use-state"
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
                {
                  label: "abortNavigation",
                  slug: "api/utils/abort-navigation"
                },
                {
                  label: "addRouteMiddleware",
                  slug: "api/utils/add-route-middleware"
                },
                {
                  label: "callOnceNew",
                  slug: "api/utils/call-once-new"
                },
                {
                  label: "clearError",
                  slug: "api/utils/clear-error"
                },
                {
                  label: "clearNuxtData",
                  slug: "api/utils/clear-nuxt-data"
                },
                {
                  label: "clearNuxtState",
                  slug: "api/utils/clear-nuxt-state"
                },
                {
                  label: "createError",
                  slug: "api/utils/create-error"
                },
                {
                  label: "defineLazyHydrationComponent",
                  slug: "api/utils/define-lazy-hydration-component"
                },
                {
                  label: "defineNuxtComponent",
                  slug: "api/utils/define-nuxt-component"
                },
                {
                  label: "defineNuxtPlugin",
                  slug: "api/utils/define-nuxt-plugin"
                },
                {
                  label: "defineNuxtRouteMiddleware",
                  slug: "api/utils/define-nuxt-route-middleware"
                },
                {
                  label: "definePageMeta",
                  slug: "api/utils/define-page-meta"
                },
                {
                  label: "defineRouteRules",
                  slug: "api/utils/define-route-rules"
                },
                {
                  label: "navigateTo",
                  slug: "api/utils/navigate-to"
                },
                {
                  label: "onBeforeRouteLeave",
                  slug: "api/utils/on-before-route-leave"
                },
                {
                  label: "onBeforeRouteUpdate",
                  slug: "api/utils/on-before-route-update"
                },
                {
                  label: "onNuxtReady",
                  slug: "api/utils/on-nuxt-ready"
                },
                {
                  label: "prefetchComponents",
                  slug: "api/utils/prefetch-components"
                },
                {
                  label: "preloadComponents",
                  slug: "api/utils/preload-components"
                },
                {
                  label: "preloadRouteComponents",
                  slug: "api/utils/preload-route-components"
                },
                {
                  label: "prerenderRoutes",
                  slug: "api/utils/prerender-routes"
                },
                {
                  label: "refreshCookieNew",
                  slug: "api/utils/refresh-cookie-new"
                },
                {
                  label: "refreshNuxtData",
                  slug: "api/utils/refresh-nuxt-data"
                },
                {
                  label: "reloadNuxtApp",
                  slug: "api/utils/reload-nuxt-app"
                },
                {
                  label: "setPageLayout",
                  slug: "api/utils/set-page-layout"
                },
                {
                  label: "setResponseStatus",
                  slug: "api/utils/set-response-status"
                },
                {
                  label: "showError",
                  slug: "api/utils/show-error"
                },
                {
                  label: "updateAppConfig",
                  slug: "api/utils/update-app-config"
                },
              ]
            },
						{
              label: "Commands",
              items: [
                {
                  label: "nuxt add",
                  slug: "api/commands/nuxt-add"
                },
                {
                  label: "nuxt analyze",
                  slug: "api/commands/nuxt-analyze"
                },
                {
                  label: "nuxt build",
                  slug: "api/commands/nuxt-build"
                },
                {
                  label: "nuxt build-module",
                  slug: "api/commands/nuxt-build-module"
                },
                {
                  label: "nuxt cleanup",
                  slug: "api/commands/nuxt-cleanup"
                },
                {
                  label: "nuxt dev",
                  slug: "api/commands/nuxt-dev"
                },
                {
                  label: "nuxt devtools",
                  slug: "api/commands/nuxt-devtools"
                },
                {
                  label: "nuxt generate",
                  slug: "api/commands/nuxt-generate"
                },
                {
                  label: "nuxt info",
                  slug: "api/commands/nuxt-info"
                },
                {
                  label: "create nuxt",
                  slug: "api/commands/create-nuxt"
                },
                {
                  label: "nuxt module",
                  slug: "api/commands/nuxt-module"
                },
                {
                  label: "nuxt prepare",
                  slug: "api/commands/nuxt-prepare"
                },
                {
                  label: "nuxt preview",
                  slug: "api/commands/nuxt-preview"
                },
                {
                  label: "nuxt typecheck",
                  slug: "api/commands/nuxt-typecheck"
                },
                {
                  label: "nuxt upgrade",
                  slug: "api/commands/nuxt-upgrade"
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
                {
                  label: "Runtime Config",
                  slug: "api/nuxt-kit/runtime-config"
                },
                {
                  label: "Templates",
                  slug: "api/nuxt-kit/templates"
                },
                {
                  label: "Nitro",
                  slug: "api/nuxt-kit/nitro"
                },
                {
                  label: "Resolving",
                  slug: "api/nuxt-kit/resolving"
                },
                {
                  label: "Logging",
                  slug: "api/nuxt-kit/logging"
                },
                {
                  label: "Builder",
                  slug: "api/nuxt-kit/builder"
                },
                {
                  label: "Examples",
                  slug: "api/nuxt-kit/examples"
                },
                {
                  label: "Programmatic Usage",
                  slug: "api/nuxt-kit/programmatic-usage"
                },
                {
                  label: "Compatibility",
                  slug: "api/nuxt-kit/compatibility"
                },
                {
                  label: "Auto-imports",
                  slug: "api/nuxt-kit/auto-imports"
                },
                {
                  label: "Components",
                  slug: "api/nuxt-kit/components"
                },
                {
                  label: "Context",
                  slug: "api/nuxt-kit/context"
                },
                {
                  label: "Pages",
                  slug: "api/nuxt-kit/pages"
                },
                {
                  label: "Layout",
                  slug: "api/nuxt-kit/layout"
                },
                {
                  label: "Plugins",
                  slug: "api/nuxt-kit/plugins"
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
