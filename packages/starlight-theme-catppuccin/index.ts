import type { StarlightPlugin } from "@astrojs/starlight/types";

type DarkFlavors = "mocha" | "macchiato" | "frappe";
type Accents =
	| "rosewater"
	| "flamingo"
	| "pink"
	| "mauve"
	| "red"
	| "maroon"
	| "peach"
	| "yellow"
	| "green"
	| "teal"
	| "sky"
	| "sapphire"
	| "blue"
	| "lavender";

interface Config {
	dark?: `${DarkFlavors}-${Accents}`;
	light?: `latte-${Accents}`;
}

export default function createPlugin(config?: Config): StarlightPlugin {
	const { dark, light } = config ?? {}
	return {
		name: "starlight-theme-catppuccin",
		hooks: {
			setup: ({ config, updateConfig }) => {
				updateConfig({
					customCss: [
						...config.customCss ?? [],
						`starlight-theme-catppuccin/themes/catppuccin-${dark ?? 'mocha-mauve'}.css`,
						`starlight-theme-catppuccin/themes/catppuccin-${light ?? 'latte-mauve'}.css`,
						"starlight-theme-catppuccin/styles/shared.css",
					],
				});
			},
		},
	};
}
