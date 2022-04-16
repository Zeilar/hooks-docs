// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "@zeilar/hooks",
	tagline: "React hooks collection",
	url: "https://hooks.angelin.dev",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "Zeilar",
	projectName: "hooks",
	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					breadcrumbs: false,
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl: "https://github.com/Zeilar/hooks",
				},
				blog: false,
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				defaultMode: "dark",
				disableSwitch: true,
			},
			navbar: {
				title: "@zeilar/hooks",
				items: [
					{
						href: "https://github.com/Zeilar/hooks",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				copyright: `Copyright © ${new Date().getFullYear()} @zeilar/hooks, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
