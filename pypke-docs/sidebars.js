/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
	docsSidebar: [
		{
			type: "doc",
			id: "intro",
		},
		{
			type: "category",
			label: "Modules",
			items: [
				"modules/fun-module",
				"modules/giveaway-module",
				"modules/moderation-module",
			],
		},
	],
};

module.exports = sidebars;
