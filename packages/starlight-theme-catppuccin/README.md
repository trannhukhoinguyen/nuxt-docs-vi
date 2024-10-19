<h3 align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png" width="100" alt="Logo"/><br/>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
	Catppuccin for <a href="https://github.com/withastro/starlight">Starlight</a>
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

<p align="center">
	<a href="https://github.com/TheOtterlord/catppuccin-starlight/stargazers"><img src="https://img.shields.io/github/stars/TheOtterlord/catppuccin-starlight?colorA=363a4f&colorB=b7bdf8&style=for-the-badge"></a>
	<a href="https://github.com/TheOtterlord/catppuccin-starlight/issues"><img src="https://img.shields.io/github/issues/TheOtterlord/catppuccin-starlight?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
	<a href="https://github.com/TheOtterlord/catppuccin-starlight/contributors"><img src="https://img.shields.io/github/contributors/TheOtterlord/catppuccin-starlight?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

![Catppuccin Starlight Preview](https://raw.githubusercontent.com/TheOtterlord/catppuccin-starlight/refs/heads/main/assets/catppuccin-starlight.webp)

## Previews

<details>
<summary>🌻 Latte</summary>
<img src="https://raw.githubusercontent.com/TheOtterlord/catppuccin-starlight/refs/heads/main/assets/latte.webp"/>
</details>
<details>
<summary>🪴 Frappé</summary>
<img src="https://raw.githubusercontent.com/TheOtterlord/catppuccin-starlight/refs/heads/main/assets/frappe.webp"/>
</details>
<details>
<summary>🌺 Macchiato</summary>
<img src="https://raw.githubusercontent.com/TheOtterlord/catppuccin-starlight/refs/heads/main/assets/macchiato.webp"/>
</details>
<details>
<summary>🌿 Mocha</summary>
<img src="https://raw.githubusercontent.com/TheOtterlord/catppuccin-starlight/refs/heads/main/assets/mocha.webp"/>
</details>

## Usage

1. Install the theme package to your project with your preferred package manager:
```sh
npm install starlight-theme-catppuccin
pnpm add starlight-theme-catppuccin
yarn add starlight-theme-catppuccin
```

2. Add the theme to your Starlight config.

```ts
import catppuccin from "starlight-theme-catppuccin";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        catppuccin()
      ]
    })
  ]
})
```

3. (Optional) Customize your theme for light/dark mode using `{flavor}-{accent}`.

```ts
import catppuccin from "starlight-theme-catppuccin";

export default defineConfig({
  // ...
  integrations: [
    starlight({
      // ...
      plugins: [
        catppuccin({ dark: "frappe-sky", light: "latte-sky" })
      ]
    })
  ]
})
```

## 💝 Thanks to
- [TheOtterlord](https://github.com/TheOtterlord)
- [Louis Escher](https://github.com/louisescher)

&nbsp;

<p align="center">
	<img src="https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/footers/gray0_ctp_on_line.svg?sanitize=true" />
</p>

<p align="center">
	Copyright &copy; 2021-present <a href="https://github.com/catppuccin" target="_blank">Catppuccin Org</a>
</p>

<p align="center">
	<a href="https://github.com/catppuccin/catppuccin/blob/main/LICENSE"><img src="https://img.shields.io/static/v1.svg?style=for-the-badge&label=License&message=MIT&logoColor=d9e0ee&colorA=363a4f&colorB=b7bdf8"/></a>
</p>
