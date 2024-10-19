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
	dark: `${DarkFlavors}-${Accents}`;
	light: `latte-${Accents}`;
}

export default function createPlugin({ dark, light }: Config = { dark: 'mocha-mauve', light: 'latte-mauve' }): StarlightPlugin {
	return {
		name: "starlight-theme-catppuccin",
		hooks: {
			setup: ({ config, updateConfig }) => {
				updateConfig({
					customCss: [
						...config.customCss ?? [],
						`starlight-theme-catppuccin/themes/catppuccin-${dark}.css`,
						`starlight-theme-catppuccin/themes/catppuccin-${light}.css`,
						`starlight-theme-catppuccin/styles/shared.css`,
					],
				});
			},
		},
	};
}
