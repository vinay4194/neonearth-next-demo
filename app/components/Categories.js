"use client";
// app/components/Categories.js
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

export default function Categories() {
	const [activeCategory, setActiveCategory] = useState(null);
	const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 5 }); // Static y: 5
	const categoryRefs = useRef({});
	const debounceTimeout = useRef(null);

	// Debounced function to set active category
	const setActiveCategoryDebounced = useCallback((category) => {
		if (debounceTimeout.current) {
			clearTimeout(debounceTimeout.current);
		}
		debounceTimeout.current = setTimeout(() => {
			setActiveCategory(category);
		}, 100); // 100ms debounce
	}, []);

	// Update dropdown x position when active category changes
	useEffect(() => {
		if (activeCategory && categoryRefs.current[activeCategory]) {
			const categoryElement = categoryRefs.current[activeCategory];
			const rect = categoryElement.getBoundingClientRect();
			const containerLeft = document.querySelector(".max-w-screen-xl")?.getBoundingClientRect().left || 0;

			// Center dropdown under the category using transform
			let calculatedX = rect.left + rect.width / 2 - 240; // Half of w-120 (480px)
			const minX = containerLeft + 20; // Minimum 20px from container left edge
			calculatedX = Math.max(calculatedX, minX);

			setDropdownPosition((prev) => ({
				x: calculatedX,
				y: 5, // Static y position
			}));
		}
	}, [activeCategory]);

	// Cleanup debounce on unmount
	useEffect(() => {
		return () => {
			if (debounceTimeout.current) {
				clearTimeout(debounceTimeout.current);
			}
		};
	}, []);

	const categories = [
		{ name: "All", img: "/categories/all.webp", hasDropdown: false },
		{
			name: "Wall Arts",
			img: "/categories/wall-arts.webp",
			hasDropdown: true,
			dropdownItems: [
				"Custom Wallpapers",
				"Custom Wall Murals",
				"Photo And Art Prints",
				"Poster Prints",
				"Canvas Prints",
				"Acrylic Prints",
				"Hanging Canvas",
			],
			image: "/categories/wall-art-sub.webp",
			imageText: "Let your walls do the talking",
		},
		{
			name: "Tapestries",
			img: "/categories/tapestries.webp",
			hasDropdown: true,
			dropdownItems: ["Wall Mural - Stone Grain", "Wall Mural - Canvas Grain", "Wall Mural - Timber Grain"],
			image: "/categories/tapestry-sub.webp",
			imageText: "Add texture to your space",
		},
		{
			name: "Rugs & Mats",
			img: "/categories/rugs-mats.webp",
			hasDropdown: true,
			dropdownItems: ["Area Rug", "Hallway Runners", "Doormats"],
			image: "/categories/rugs-mats-sub.webp",
			imageText: "Enhance your floors",
		},
		{
			name: "Pillows",
			img: "/categories/pillows.webp",
			hasDropdown: true,
			dropdownItems: ["Throw Pillows", "Bow Pillows", "Coushions", "Bed Pillows"],
			image: "/categories/pillows-sub.webp",
			imageText: "Comfort meets style",
		},
		{
			name: "Curtains",
			img: "/categories/curtains.webp",
			hasDropdown: true,
			dropdownItems: ["Curtain Drapes", "Sheer Curtains", "Blackout Curtains", "Shower Curtains"],
			image: "/categories/curtains-sub.webp",
			imageText: "Frame your windows",
		},
		{
			name: "Custom Fabric",
			img: "/categories/custom-fabric.webp",
			hasDropdown: false,
		},
		{
			name: "Pet Zone",
			img: "/categories/pet-zone.webp",
			hasDropdown: true,
			dropdownItems: ["Pet Beds", "Pet Bags", "Pet T-Shirts", "Pet Towels"],
			image: "/categories/pet-sub.webp",
			imageText: "Spoil your pets",
		},
		{
			name: "Clothing",
			img: "/categories/clothing.webp",
			hasDropdown: true,
			dropdownItems: ["Men's T-Shirts", "Women's T-Shirts", "Hoodies"],
			image: "/categories/clothing-sub.webp",
			imageText: "Wear your style",
		},
		{
			name: "More",
			img: "/categories/more.webp",
			hasDropdown: true,
			dropdownItems: ["Letter & Decals", "Bed Linen", "Table Linen", "Bags"],
			image: "/categories/more-sub.webp",
			imageText: "Discover more",
		},
		{
			name: "Theme",
			img: "/categories/theme.webp",
			hasDropdown: true,
			dropdownItems: ["Neon Designs", "Vintage", "Abstract", "Nature"],
			image: "/categories/pattern-sub.webp",
			imageText: "Set the mood",
		},
	];

	return (
		<div className="bg-white border-t border-gray-300 py-3">
			<div className="max-w-screen-xl mx-auto flex items-center justify-evenly gap-6 overflow-x-auto px-4">
				{categories.map((cat, idx) => (
					<div
						key={idx}
						className="relative flex flex-col items-center text-sm cursor-pointer group"
						onMouseEnter={() => cat.hasDropdown && setActiveCategoryDebounced(cat.name)}
						onMouseLeave={() => cat.hasDropdown && setActiveCategoryDebounced(null)}
						ref={(el) => (categoryRefs.current[cat.name] = el)}
					>
						<div className="flex flex-col items-center">
							<Image
								src={cat.img}
								alt={cat.name}
								width={65}
								height={65}
								className="rounded-full"
								priority={idx < 3} // Preload first few images
							/>
							<div className="h-5 flex items-center justify-center mt-1">
								<span className={`whitespace-nowrap font-normal ${activeCategory === cat.name ? "text-pink-500" : "text-gray-700"}`}>
									{cat.name}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Single dropdown container */}
			<div
				className={`fixed w-120 max-h-[340px] overflow-hidden bg-white shadow-lg rounded border border-gray-200 z-50 transition-opacity duration-300 ${
					activeCategory ? "opacity-100 visible" : "opacity-0 invisible"
				}`}
				style={{
					transform: `translate(${dropdownPosition.x}px, ${dropdownPosition.y}px)`,
				}}
				onMouseEnter={() => activeCategory && setActiveCategoryDebounced(activeCategory)}
				onMouseLeave={() => setActiveCategoryDebounced(null)}
			>
				<div className="p-4 flex">
					<div className="w-2/3 pr-4">
						{activeCategory &&
							(() => {
								const cat = categories.find((c) => c.name === activeCategory);
								if (!cat || !cat.hasDropdown) return null;
								return cat.dropdownItems.length > 0 ? (
									<div className="grid grid-cols-1 gap-2">
										{cat.dropdownItems.map((item, i) => (
											<div key={i} className="flex items-center text-left hover:text-pink-500 cursor-pointer">
												<span className="text-sm">{item}</span>
												<span className="ml-2 text-pink-500">›</span>
											</div>
										))}
									</div>
								) : (
									<div className="text-sm text-gray-500">No items for {cat.name}</div>
								);
							})()}
					</div>
					<div className="w-1/2 pl-4 border-l border-gray-200">
						{activeCategory &&
							(() => {
								const cat = categories.find((c) => c.name === activeCategory);
								if (!cat || !cat.hasDropdown) return null;
								return (
									<>
										{/* <div className="text-lg font-medium text-gray-800">{cat.imageText}</div> */}
										<div className="">
											<Image
												src={cat.image || "/placeholder.jpg"}
												alt={`${cat.name} preview`}
												width={170}
												height={100}
												className="rounded"
												style={{ height: "auto" }}
											/>
										</div>
									</>
								);
							})()}
					</div>
				</div>
			</div>
		</div>
	);
}

// import Image from "next/image";
// export default function Categories() {
// 	const categories = [
// 		{ name: "All", img: "/categories/all.webp" },
// 		{ name: "Wall Arts", img: "/categories/wall-arts.webp" },
// 		{ name: "Tapestries", img: "/categories/tapestries.webp" },
// 		{ name: "Rugs & Mats", img: "/categories/rugs-mats.webp" },
// 		{ name: "Pillows", img: "/categories/pillows.webp" },
// 		{ name: "Curtains", img: "/categories/curtains.webp" },
// 		{ name: "Custom Fabric", img: "/categories/custom-fabric.webp" },
// 		{ name: "Pet Zone", img: "/categories/pet-zone.webp" },
// 		{ name: "Clothing", img: "/categories/clothing.webp" },
// 		{ name: "More", img: "/categories/more.webp" },
// 		{ name: "Theme", img: "/categories/theme.webp" },
// 	];
// 	return (
// 		<div className="bg-white border-t border-gray-300 py-3 min-h-[120px]">
// 			<div className="max-w-screen-xl mx-auto flex items-center justify-evenly gap-6 overflow-x-auto px-4">
// 				{categories.map((cat, idx) => (
// 					<div key={idx} className="w-[85px] flex flex-col items-center text-sm text-gray-700 cursor-pointer ">
// 						<Image src={cat.img} alt={cat.name} width={65} height={65} className="rounded-full w-[65px] h-[65px]" priority />
// 						<span className="mt-1 whitespace-nowrap">{cat.name}</span>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);
// }
