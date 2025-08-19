import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import catppuccin from "@catppuccin/starlight";
import AutoImport from "astro-auto-import";
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: "https://starlight.catppuccin.com",
	integrations: [
    AutoImport({
      // 👇 Tự động import các component vào Markdown
      imports: [
        // Đường dẫn từ 1 package (không cần @components/... nội bộ)
        {
          from: "@catppuccin/starlight/components",
          names: [
            "Card",
            "LinkCard",
            "Aside",
            "Badge",
            "Code",
            "FileTree",
            "Icon",
            "LinkButton",
            "Tabs",
            "TabItem",
          ],
        },
      ],
    }),
		starlight({
			title: "Nuxt & Vue",
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
          label: "✨ Nuxt",
          items: [
            {
              label: "Get Started",
              items: [
                { label: "Introduction", slug: "nuxt/get_started/introduction" },
                { label: "Installation", slug: "nuxt/get_started/installation" },
                { label: "Configuration", slug: "nuxt/get_started/configuration" },
                { label: "Views", slug: "nuxt/get_started/views" },
                { label: "Assets", slug: "nuxt/get_started/assets" },
                { label: "Styling", slug: "nuxt/get_started/styling" },
                { label: "Routing", slug: "nuxt/get_started/routing" },
                { label: "SEO and Meta", slug: "nuxt/get_started/seo-meta" },
                { label: "Transitions", slug: "nuxt/get_started/transitions" },
                { label: "Data Fetching", slug: "nuxt/get_started/data-fetching" },
                { label: "State Management", slug: "nuxt/get_started/state-management" },
                { label: "Error Handling", slug: "nuxt/get_started/error-handling" },
                { label: "Server", slug: "nuxt/get_started/server" },
                { label: "Layers", slug: "nuxt/get_started/layers" },
                { label: "Prerendering", slug: "nuxt/get_started/prerendering" },
                { label: "Deployment", slug: "nuxt/get_started/deployment" },
                { label: "Testing", slug: "nuxt/get_started/testing" },
                { label: "Upgrade Guide", slug: "nuxt/get_started/upgrade" },
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
                      slug: "nuxt/guide/key-concepts/auto-imports"
                    },
                    {
                      label: "Nuxt Lifecycle",
                      slug: "nuxt/guide/key-concepts/nuxt-lifecycle"
                    },
                    {
                      label: "Vue.js Development",
                      slug: "nuxt/guide/key-concepts/vuejs-development"
                    },
                    {
                      label: "Rendering Modes",
                      slug: "nuxt/guide/key-concepts/rendering-modes"
                    },
                    {
                      label: "Server Engine",
                      slug: "nuxt/guide/key-concepts/server-engine"
                    },
                    {
                      label: "Modules",
                      slug: "nuxt/guide/key-concepts/modules"
                    },
                    {
                      label: "ES Modules",
                      slug: "nuxt/guide/key-concepts/es-modules"
                    },
                    {
                      label: "TypeScript",
                      slug: "nuxt/guide/key-concepts/typescript"
                    },
                    {
                      label: "Code Style",
                      slug: "nuxt/guide/key-concepts/code-style"
                    },
                  ]
                },
                {
                  label: "Directory Structure",
                  items: [
                    {
                      label: ".nuxt",
                      slug: "nuxt/guide/directory-structure/nuxt"
                    },
                    {
                      label: ".output",
                      slug: "nuxt/guide/directory-structure/output"
                    },
                    {
                      label: "app",
                      items: [
                        { label: "assets", slug: "nuxt/guide/directory-structure/app/assets" },
                        { label: "components", slug: "nuxt/guide/directory-structure/app/components" },
                        { label: "composables", slug: "nuxt/guide/directory-structure/app/composables" },
                        { label: "layouts", slug: "nuxt/guide/directory-structure/app/layouts" },
                        { label: "middleware", slug: "nuxt/guide/directory-structure/app/middleware" },
                        { label: "pages", slug: "nuxt/guide/directory-structure/app/pages" },
                        { label: "plugins", slug: "nuxt/guide/directory-structure/app/plugins" },
                        { label: "utils", slug: "nuxt/guide/directory-structure/app/utils" },
                        { label: "app.vue", slug: "nuxt/guide/directory-structure/app/app" },
                        { label: "app.config.ts", slug: "nuxt/guide/directory-structure/app/app-config" },
                        { label: "error.vue", slug: "nuxt/guide/directory-structure/app/error" },
                      ],
                    },
                    {
                      label: "content",
                      slug: "nuxt/guide/directory-structure/content"
                    },
                    {
                      label: "modules",
                      slug: "nuxt/guide/directory-structure/modules"
                    },
                    {
                      label: "node_modules",
                      slug: "nuxt/guide/directory-structure/node-modules"
                    },
                    {
                      label: "public",
                      slug: "nuxt/guide/directory-structure/public"
                    },
                    {
                      label: "server",
                      slug: "nuxt/guide/directory-structure/server"
                    },
                    {
                      label: "shared",
                      slug: "nuxt/guide/directory-structure/shared"
                    },
                    {
                      label: ".env",
                      slug: "nuxt/guide/directory-structure/env"
                    },
                    {
                      label: ".gitignore",
                      slug: "nuxt/guide/directory-structure/gitignore"
                    },
                    {
                      label: ".nuxtignore",
                      slug: "nuxt/guide/directory-structure/nuxtignore"
                    },
                    {
                      label: ".nuxtrc",
                      slug: "nuxt/guide/directory-structure/nuxtrc"
                    },
                    {
                      label: "nuxt.config.ts",
                      slug: "nuxt/guide/directory-structure/nuxt-config"
                    },
                    {
                      label: "package.json",
                      slug: "nuxt/guide/directory-structure/package"
                    },
                    {
                      label: "tsconfig.json",
                      slug: "nuxt/guide/directory-structure/tsconfig"
                    },
                  ]
                },
                {
                  label: "Going Further",
                  items: [
                    {
                      label: "Events",
                      slug: "nuxt/guide/going-further/events"
                    },
                    {
                      label: "Experimental Features",
                      slug: "nuxt/guide/going-further/experimental-features"
                    },
                    {
                      label: "Features",
                      slug: "nuxt/guide/going-further/features"
                    },
                    {
                      label: "How Nuxt Works?",
                      slug: "nuxt/guide/going-further/how-nuxt-works"
                    },
                    {
                      label: "Runtime Config",
                      slug: "nuxt/guide/going-further/runtime-config"
                    },
                    {
                      label: "Nightly Release Channel",
                      slug: "nuxt/guide/going-further/nightly-release-channel"
                    },
                    {
                      label: "Lifecycle Hooks",
                      slug: "nuxt/guide/going-further/lifecycle-hooks"
                    },
                    {
                      label: "Module Author Guide",
                      slug: "nuxt/guide/going-further/module-author-guide"
                    },
                    {
                      label: "Nuxt Kit",
                      slug: "nuxt/guide/going-further/nuxt-kit"
                    },
                    {
                      label: "NuxtApp",
                      slug: "nuxt/guide/going-further/nuxtapp"
                    },
                    {
                      label: "Authoring Nuxt Layers",
                      slug: "nuxt/guide/going-further/authoring-nuxt-layers"
                    },
                    {
                      label: "Debugging",
                      slug: "nuxt/guide/going-further/debugging"
                    },
                  ]
                },
                {
                  label: "Recipes",
                  items: [
                    {
                      label: "Custom Routing",
                      slug: "nuxt/guide/recipes/custom-routing"
                    },
                    {
                      label: "Vite Plugins",
                      slug: "nuxt/guide/recipes/vite-plugins"
                    },
                    {
                      label: "Custom useFetch",
                      slug: "nuxt/guide/recipes/custom-usefetch"
                    },
                    {
                      label: "Sessions and Authentication",
                      slug: "nuxt/guide/recipes/sessions-and-authentication"
                    },
                  ]
                },
                {
                  label: "Best Practices",
                  items: [
                    {
                      label: "Nuxt and hydration",
                      slug: "nuxt/guide/best-practices/hydration"
                    },
                    {
                      label: "Nuxt Performance",
                      slug: "nuxt/guide/best-practices/nuxt-performance"
                    },
                    {
                      label: "Nuxt Plugins",
                      slug: "nuxt/guide/best-practices/nuxt-plugins"
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
                      slug: "nuxt/api/components/client-only"
                    },
                    {
                      label: "<DevOnly>",
                      slug: "nuxt/api/components/dev-only"
                    },
                    {
                      label: "<NuxtClientFallback>",
                      slug: "nuxt/api/components/nuxt-client-fallback"
                    },
                    {
                      label: "<NuxtPicture>",
                      slug: "nuxt/api/components/nuxt-picture"
                    },
                    {
                      label: "<Teleport>",
                      slug: "nuxt/api/components/teleport"
                    },
                    {
                      label: "<NuxtRouteAnnouncer>",
                      slug: "nuxt/api/components/nuxt-route-announcer"
                    },
                    {
                      label: "<NuxtTime>",
                      slug: "nuxt/api/components/nuxt-time"
                    },
                    {
                      label: "<NuxtPage>",
                      slug: "nuxt/api/components/nuxt-page"
                    },
                    {
                      label: "<NuxtLayout>",
                      slug: "nuxt/api/components/nuxt-layout"
                    },
                    {
                      label: "<NuxtLink>",
                      slug: "nuxt/api/components/nuxt-link"
                    },
                    {
                      label: "<NuxtLoadingIndicator>",
                      slug: "nuxt/api/components/nuxt-loading-indicator"
                    },
                    {
                      label: "<NuxtErrorBoundary>",
                      slug: "nuxt/api/components/nuxt-error-boundary"
                    },
                    {
                      label: "<NuxtWelcome>",
                      slug: "nuxt/api/components/nuxt-welcome"
                    },
                    {
                      label: "<NuxtIsland>",
                      slug: "nuxt/api/components/nuxt-island"
                    },
                    {
                      label: "<NuxtImg>",
                      slug: "nuxt/api/components/nuxt-img"
                    },
                  ]
                },
                {
                  label: "Composables",
                  items: [
                    {
                      label: "onPrehydrate",
                      slug: "nuxt/api/composables/on-prehydrate"
                    },
                    {
                      label: "useAppConfig",
                      slug: "nuxt/api/composables/use-app-config"
                    },
                    {
                      label: "useAsyncData",
                      slug: "nuxt/api/composables/use-async-data"
                    },
                    {
                      label: "useCookie",
                      slug: "nuxt/api/composables/use-cookie"
                    },
                    {
                      label: "useError",
                      slug: "nuxt/api/composables/use-error"
                    },
                    {
                      label: "useFetch",
                      slug: "nuxt/api/composables/use-fetch"
                    },
                    {
                      label: "useHead",
                      slug: "nuxt/api/composables/use-head"
                    },
                    {
                      label: "useHeadSafe",
                      slug: "nuxt/api/composables/use-head-safe"
                    },
                    {
                      label: "useHydration",
                      slug: "nuxt/api/composables/use-hydration"
                    },
                    {
                      label: "useLazyAsyncData",
                      slug: "nuxt/api/composables/use-lazy-async-data"
                    },
                    {
                      label: "useLazyFetch",
                      slug: "nuxt/api/composables/use-lazy-fetch"
                    },
                    {
                      label: "useLoadingIndicator",
                      slug: "nuxt/api/composables/use-loading-indicator"
                    },
                    {
                      label: "useNuxtApp",
                      slug: "nuxt/api/composables/use-nuxt-app"
                    },
                    {
                      label: "useNuxtData",
                      slug: "nuxt/api/composables/use-nuxt-data"
                    },
                    {
                      label: "usePreviewMode",
                      slug: "nuxt/api/composables/use-preview-mode"
                    },
                    {
                      label: "useRequestEvent",
                      slug: "nuxt/api/composables/use-request-event"
                    },
                    {
                      label: "useRequestFetch",
                      slug: "nuxt/api/composables/use-request-fetch"
                    },
                    {
                      label: "useRequestHeader",
                      slug: "nuxt/api/composables/use-request-header"
                    },
                    {
                      label: "useRequestHeaders",
                      slug: "nuxt/api/composables/use-request-headers"
                    },
                    {
                      label: "useRequestURL",
                      slug: "nuxt/api/composables/use-request-url"
                    },
                    {
                      label: "useResponseHeader",
                      slug: "nuxt/api/composables/use-response-header"
                    },
                    {
                      label: "useRoute",
                      slug: "nuxt/api/composables/use-route"
                    },
                    {
                      label: "useRouteAnnouncerNew",
                      slug: "nuxt/api/composables/use-route-announcer-new"
                    },
                    {
                      label: "useRouter",
                      slug: "nuxt/api/composables/use-router"
                    },
                    {
                      label: "useRuntimeConfig",
                      slug: "nuxt/api/composables/use-runtime-config"
                    },
                    {
                      label: "useRuntimeHook",
                      slug: "nuxt/api/composables/use-runtime-hook"
                    },
                    {
                      label: "useSeoMeta",
                      slug: "nuxt/api/composables/use-seo-meta"
                    },
                    {
                      label: "useServerSeoMeta",
                      slug: "nuxt/api/composables/use-server-seo-meta"
                    },
                    {
                      label: "useState",
                      slug: "nuxt/api/composables/use-state"
                    },
                  ]
                },
                {
                  label: "Utils",
                  items: [
                    {
                      label: "$fetch",
                      slug: "nuxt/api/utils/fetch"
                    },
                    {
                      label: "abortNavigation",
                      slug: "nuxt/api/utils/abort-navigation"
                    },
                    {
                      label: "addRouteMiddleware",
                      slug: "nuxt/api/utils/add-route-middleware"
                    },
                    {
                      label: "callOnceNew",
                      slug: "nuxt/api/utils/call-once-new"
                    },
                    {
                      label: "clearError",
                      slug: "nuxt/api/utils/clear-error"
                    },
                    {
                      label: "clearNuxtData",
                      slug: "nuxt/api/utils/clear-nuxt-data"
                    },
                    {
                      label: "clearNuxtState",
                      slug: "nuxt/api/utils/clear-nuxt-state"
                    },
                    {
                      label: "createError",
                      slug: "nuxt/api/utils/create-error"
                    },
                    {
                      label: "defineLazyHydrationComponent",
                      slug: "nuxt/api/utils/define-lazy-hydration-component"
                    },
                    {
                      label: "defineNuxtComponent",
                      slug: "nuxt/api/utils/define-nuxt-component"
                    },
                    {
                      label: "defineNuxtPlugin",
                      slug: "nuxt/api/utils/define-nuxt-plugin"
                    },
                    {
                      label: "defineNuxtRouteMiddleware",
                      slug: "nuxt/api/utils/define-nuxt-route-middleware"
                    },
                    {
                      label: "definePageMeta",
                      slug: "nuxt/api/utils/define-page-meta"
                    },
                    {
                      label: "defineRouteRules",
                      slug: "nuxt/api/utils/define-route-rules"
                    },
                    {
                      label: "navigateTo",
                      slug: "nuxt/api/utils/navigate-to"
                    },
                    {
                      label: "onBeforeRouteLeave",
                      slug: "nuxt/api/utils/on-before-route-leave"
                    },
                    {
                      label: "onBeforeRouteUpdate",
                      slug: "nuxt/api/utils/on-before-route-update"
                    },
                    {
                      label: "onNuxtReady",
                      slug: "nuxt/api/utils/on-nuxt-ready"
                    },
                    {
                      label: "prefetchComponents",
                      slug: "nuxt/api/utils/prefetch-components"
                    },
                    {
                      label: "preloadComponents",
                      slug: "nuxt/api/utils/preload-components"
                    },
                    {
                      label: "preloadRouteComponents",
                      slug: "nuxt/api/utils/preload-route-components"
                    },
                    {
                      label: "prerenderRoutes",
                      slug: "nuxt/api/utils/prerender-routes"
                    },
                    {
                      label: "refreshCookieNew",
                      slug: "nuxt/api/utils/refresh-cookie-new"
                    },
                    {
                      label: "refreshNuxtData",
                      slug: "nuxt/api/utils/refresh-nuxt-data"
                    },
                    {
                      label: "reloadNuxtApp",
                      slug: "nuxt/api/utils/reload-nuxt-app"
                    },
                    {
                      label: "setPageLayout",
                      slug: "nuxt/api/utils/set-page-layout"
                    },
                    {
                      label: "setResponseStatus",
                      slug: "nuxt/api/utils/set-response-status"
                    },
                    {
                      label: "showError",
                      slug: "nuxt/api/utils/show-error"
                    },
                    {
                      label: "updateAppConfig",
                      slug: "nuxt/api/utils/update-app-config"
                    },
                  ]
                },
                {
                  label: "Commands",
                  items: [
                    {
                      label: "nuxt add",
                      slug: "nuxt/api/commands/nuxt-add"
                    },
                    {
                      label: "nuxt analyze",
                      slug: "nuxt/api/commands/nuxt-analyze"
                    },
                    {
                      label: "nuxt build",
                      slug: "nuxt/api/commands/nuxt-build"
                    },
                    {
                      label: "nuxt build-module",
                      slug: "nuxt/api/commands/nuxt-build-module"
                    },
                    {
                      label: "nuxt cleanup",
                      slug: "nuxt/api/commands/nuxt-cleanup"
                    },
                    {
                      label: "nuxt dev",
                      slug: "nuxt/api/commands/nuxt-dev"
                    },
                    {
                      label: "nuxt devtools",
                      slug: "nuxt/api/commands/nuxt-devtools"
                    },
                    {
                      label: "nuxt generate",
                      slug: "nuxt/api/commands/nuxt-generate"
                    },
                    {
                      label: "nuxt info",
                      slug: "nuxt/api/commands/nuxt-info"
                    },
                    {
                      label: "create nuxt",
                      slug: "nuxt/api/commands/create-nuxt"
                    },
                    {
                      label: "nuxt module",
                      slug: "nuxt/api/commands/nuxt-module"
                    },
                    {
                      label: "nuxt prepare",
                      slug: "nuxt/api/commands/nuxt-prepare"
                    },
                    {
                      label: "nuxt preview",
                      slug: "nuxt/api/commands/nuxt-preview"
                    },
                    {
                      label: "nuxt typecheck",
                      slug: "nuxt/api/commands/nuxt-typecheck"
                    },
                    {
                      label: "nuxt upgrade",
                      slug: "nuxt/api/commands/nuxt-upgrade"
                    },
                  ]
                },
                {
                  label: "Nuxt Kit",
                  items: [
                    {
                      label: "Modules",
                      slug: "nuxt/api/nuxt-kit/modules"
                    },
                    {
                      label: "Runtime Config",
                      slug: "nuxt/api/nuxt-kit/runtime-config"
                    },
                    {
                      label: "Templates",
                      slug: "nuxt/api/nuxt-kit/templates"
                    },
                    {
                      label: "Nitro",
                      slug: "nuxt/api/nuxt-kit/nitro"
                    },
                    {
                      label: "Resolving",
                      slug: "nuxt/api/nuxt-kit/resolving"
                    },
                    {
                      label: "Logging",
                      slug: "nuxt/api/nuxt-kit/logging"
                    },
                    {
                      label: "Builder",
                      slug: "nuxt/api/nuxt-kit/builder"
                    },
                    {
                      label: "Examples",
                      slug: "nuxt/api/nuxt-kit/examples"
                    },
                    {
                      label: "Programmatic Usage",
                      slug: "nuxt/api/nuxt-kit/programmatic-usage"
                    },
                    {
                      label: "Compatibility",
                      slug: "nuxt/api/nuxt-kit/compatibility"
                    },
                    {
                      label: "Auto-imports",
                      slug: "nuxt/api/nuxt-kit/auto-imports"
                    },
                    {
                      label: "Components",
                      slug: "nuxt/api/nuxt-kit/components"
                    },
                    {
                      label: "Context",
                      slug: "nuxt/api/nuxt-kit/context"
                    },
                    {
                      label: "Pages",
                      slug: "nuxt/api/nuxt-kit/pages"
                    },
                    {
                      label: "Layout",
                      slug: "nuxt/api/nuxt-kit/layout"
                    },
                    {
                      label: "Plugins",
                      slug: "nuxt/api/nuxt-kit/plugins"
                    },
                  ]
                },
                {
                  label: "Advanced",
                  items: [
                    {
                      label: "Lifecycle Hooks",
                      slug: "nuxt/api/advanced/lifecycle-hooks"
                    },
                    {
                      label: "Import meta",
                      slug: "nuxt/api/advanced/import-meta"
                    },
                  ]
                },
                {
                  label: "Nuxt Configuration",
                  slug: "nuxt/api/nuxt-config"
                },
              ],
            },
            {
              label: "📰 Blog",
              items: [
                { label: "Nuxt on the Edge", slug: "nuxt/blog/nuxt-on-the-edge" },
              ],
            },
          ],
        },
        {
          label: "✨ Vue",
          items: [
            {
              label: "📂 Guide",
              items: [
                { label: "Introduction", slug: "vue/guide/introduction" },
                { label: "Quick Start", slug: "vue/guide/quick-start" },
                {
                  label: "Essentials",
                  items: [
                    { label: "Creating a Vue Application", slug: "vue/guide/essentials/application" },
                    { label: "Template Syntax", slug: "vue/guide/essentials/template-syntax" },
                  ],
                },
                {
                  label: "Extras",
                  items: [
                    { label: "Web Components", slug: "vue/guide/extras/web-components" },
                  ],
                },
              ],
            },
            {
              label: "API",
              items: [
                { label: "Application", slug: "vue/api/application" },
                { label: "Composition API Setup", slug: "vue/api/composition-api-setup" },
                { label: "General", slug: "vue/api/general" },
              ],
            },
            { label: "API Reference", slug: "vue/api" },
            { label: "Examples", slug: "vue/examples" },
            { label: "Glossary", slug: "vue/glossary" },
            { label: "Production Error Code Reference", slug: "vue/error-reference" },
          ],
        },
			],
			plugins: [catppuccin()],
		}),
    react(),
    mdx(),
	],
});
