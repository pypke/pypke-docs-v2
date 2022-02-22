// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Pypke Bot",
	tagline: "A bot for all your needs.",
	url: "https://your-docusaurus-test-site.com",
	baseUrl: "/",
	onBrokenLinks: "warn",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "Pypke", // Usually your GitHub org/user name.
	projectName: "pypke-docs", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: "/",
					sidebarPath: require.resolve("./sidebars.js"),
					editUrl:
						"https://github.com/pypke/pypke-docs-v2/tree/master/pypke-docs",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
				},
				blog: {
					showReadingTime: true,
					editUrl:
						"https://github.com/pypke/pypke-docs-v2/tree/master/pypke-docs",
				},
				theme: {
					customCss: [
						require.resolve("./src/css/lightTheme.css"),
						require.resolve("./src/css/darkTheme.css"),
						require.resolve("./src/css/extraComponents.css"),
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			colorMode: {
				respectPrefersColorScheme: true,
			},
			metadata: [
				{
					name: "og:image",
					content: "https://guide.disnake.dev/static/img/logo.png",
				},
				{
					name: "theme-color",
					content: "#feb402",
				},
				{
					name: "twitter:card",
					content: "summary",
				},
			],
			navbar: {
				hideOnScroll: true,
				title: "Pypke Bot",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.png",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Docs",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://discord.gg/wait",
						className: "navbar-item-discord",
						position: "right",
					},
					{
						href: "https://github.com/pypke/pypke-docs-v2/tree/master/pypke-docs",
						className: "navbar-item-github",
						position: "right",
					},
				],
			},
			announcementBar: {
				id: "support_us",
				content: "<b>Support us on Patreon!</b>",
				backgroundColor: "#feb402",
				textColor: "#000000",
				isCloseable: true,
			},
			hideableSidebar: true,
			autoCollapseSidebarCategories: true,
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
