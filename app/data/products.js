export const topProducts = [
	{
		title: "Custom Wall Tapestry - Velvet Satin",
		price: "$17.96",
		img: "/products/product1.webp",
		addPrefix: true,
		overlay: {
			x: 27, // x-position inside the canvas
			y: 29, // y-position
			width: 167,
			height: 162,
			preserveAspect: false,
		},
	},
	{
		title: "Photo Print - Framing",
		price: "$27.19",
		img: "/products/product2.webp",
		addPrefix: true,
		overlay: {
			x: 53, // x-position inside the canvas
			y: 50, // y-position
			width: 118,
			height: 118,
			preserveAspect: false,
		},
	},
	{
		title: "Hanging Canvas - Natural",
		price: "$36.00",
		img: "/products/product3.webp",
		addPrefix: true,
		overlay: {
			x: 60, // x-position inside the canvas
			y: 75, // y-position
			width: 100,
			height: 113,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Square Throw Pillow - Velvet Satin",
		price: "$16.95",
		img: "/products/pillow-transbg.webp",
		mask: "/products/pillow-mask.png",
		addPrefix: true,
		overlay: {
			x: 18, // Avoid left curve
			y: 20, // Avoid top curve
			width: 185, // 300 - 30*2 (left & right)
			height: 185, // 400 - 40*2 (top & bottom)
			preserveAspect: false,
			clipKey: "curvedCushion",
		},
	},
	{
		title: "Custom Monogram Arm Tote Bag",
		price: "$27.50",
		img: "/products/product5.webp",
		addPrefix: true,
		overlay: {
			x: 95, // x-position inside the canvas
			y: 132, // y-position
			width: 32,
			height: 32,
			preserveAspect: false,
		},
	},
];

export const trendingProducts = [
	{
		title: "Custom Panoramic Tapestry -Velvet Satin",
		price: "$29.99",
		img: "/trending/product1.webp",
		overlay: {
			x: 20,
			y: 73,
			width: 183,
			height: 90,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Sheer Curtain -Linen Weave",
		price: "$19.49",
		img: "/trending/product2.webp",
		mask: "/products/curtain-mask.png",
		overlay: {
			x: 18,
			y: 10,
			width: 180,
			height: 200,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Women's Hoodie - White",
		price: "$42.95",
		img: "/trending/product3.webp",
		overlay: {
			x: 80,
			y: 49,
			width: 72,
			height: 72,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Classic Tote Bag",
		price: "$32.00",
		img: "/trending/product4.webp",
		overlay: {
			x: 54,
			y: 77,
			width: 104,
			height: 119,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Coffee Mugs",
		price: "$34.50",
		img: "/trending/product5.webp",
		overlay: {
			x: 4,
			y: 81,
			width: 179,
			height: 63,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Waist Apron",
		price: "$29.99",
		img: "/trending/product6.webp",
		overlay: {
			x: 20,
			y: 87,
			width: 180,
			height: 94,
			preserveAspect: false,
		},
	},
	{
		title: "Rug - Luxe Grain - Rectangle",
		price: "$92.63",
		img: "/trending/product7.webp",
		overlay: {
			x: 19,
			y: 53,
			width: 183,
			height: 116,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Wallpaper - Stone Grain",
		price: "$65.32",
		img: "/trending/product8.webp",
		mask: "/products/wall-mask.png",
		overlay: {
			x: 0,
			y: 0,
			width: 220,
			height: 175,
			preserveAspect: false,
		},
	},
	{
		title: "Custom Women's Full Sarong",
		price: "$78.65",
		img: "/trending/product9.webp",
		overlay: {
			x: 46,
			y: 23,
			width: 128,
			height: 175,
			preserveAspect: false,
		},
	},
	{
		title: "Doormat - Rectangle",
		price: "$9.25",
		img: "/trending/product10.webp",
		overlay: {
			x: 19,
			y: 53,
			width: 182,
			height: 116,
			preserveAspect: false,
		},
	},
];

//Middle section near the bootom
export const Curtains = {
	title: "Curtain Creations",
	subtitle: "Personalized Drapes to Set the Ambience",
	mainImage: "/middleSection/curtain-main.webp",
	items: [
		{ img: "/middleSection/curtain-sub1.webp", label: "Custom Drapes" },
		{ img: "/middleSection/curtain-sub2.webp", label: "Blackout Curtains" },
		{ img: "/middleSection/curtain-sub3.webp", label: "Shower Curtains" },
		{ img: "/middleSection/curtain-sub4.webp", label: "Sheer Curtains" },
	],
	buttonText: "Show Me More",
	buttonUrl: "#",
};
export const Walls = {
	title: "Walls of Wonder",
	subtitle: "Discover Your Wall's Perfect Vibe",
	mainImage: "/middleSection/walls-main.webp",
	items: [
		{ img: "/middleSection/walls-sub1.webp", label: "Custom Wallpapers" },
		{ img: "/middleSection/walls-sub2.webp", label: "Custom Wall Murals" },
		{ img: "/middleSection/walls-sub3.webp", label: "Photo And Art Prints" },
		{ img: "/middleSection/walls-sub4.webp", label: "Canvas Prints" },
	],
	buttonText: "Show Me More",
	buttonUrl: "#",
};
export const Pillows = {
	title: "Pillow Palette",
	subtitle: "Create Your Corner of Plushy Comfort",
	mainImage: "/middleSection/pillow-main.webp",
	items: [
		{ img: "/middleSection/pillow-sub1.webp", label: "Throw Pillows" },
		{ img: "/middleSection/pillow-sub2.webp", label: "Cushions" },
		{ img: "/middleSection/pillow-sub3.webp", label: "Bow Pillows" },
		{ img: "/middleSection/pillow-sub4.webp", label: "Bed Pillows" },
	],
	buttonText: "Show Me More",
	buttonUrl: "#",
};
export const Tapestries = {
	title: "Timeless Tapestries",
	subtitle: "Personalized Tapestries to Reflect Your Essence",
	mainImage: "/middleSection/tapestry-main.webp",
	items: [
		{ img: "/middleSection/tapestry-sub1.webp", label: "Custom Wall Tapestries" },
		{ img: "/middleSection/tapestry-sub2.webp", label: "Custom Panoramic Tapestries" },
		{ img: "/middleSection/tapestry-sub3.webp", label: "Custom Triangular Tapestries" },
		{ img: "/middleSection/tapestry-sub4.webp", label: "Custom Hanging Tapestries" },
	],
	buttonText: "Show Me More",
	buttonUrl: "#",
};
