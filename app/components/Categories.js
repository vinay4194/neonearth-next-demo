"use client";
// // app/components/Categories.js
// import { useState, useRef, useEffect } from "react";
// import Image from "next/image";

// export default function Categories() {
// 	const [activeCategory, setActiveCategory] = useState(null);
// 	const categoryRefs = useRef({});
// 	const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });

// 	// Update dropdown position when active category changes
// 	useEffect(() => {
// 		if (activeCategory && categoryRefs.current[activeCategory]) {
// 			const categoryElement = categoryRefs.current[activeCategory];
// 			const rect = categoryElement.getBoundingClientRect();
// 			const containerLeft = document.querySelector(".max-w-screen-xl")?.getBoundingClientRect().left || 0;

// 			// Position dropdown centered on the active category
// 			let calculatedLeft = rect.left + rect.width / 2;

// 			// Make sure dropdown stays within reasonable bounds
// 			const minLeft = containerLeft + 20; // Minimum 20px from left edge
// 			calculatedLeft = Math.max(calculatedLeft, minLeft);

// 			setDropdownPosition({
// 				left: calculatedLeft,
// 				top: rect.bottom + window.scrollY,
// 			});
// 		}
// 	}, [activeCategory]);

// 	const categories = [
// 		{ name: "All", img: "/categories/all.webp", hasDropdown: false },
// 		{
// 			name: "Wall Arts",
// 			img: "/categories/wall-arts.webp",
// 			hasDropdown: true,
// 			dropdownItems: [
// 				"Custom Wallpapers",
// 				"Custom Wall Murals",
// 				"Photo And Art Prints",
// 				"Poster Prints",
// 				"Canvas Prints",
// 				"Acrylic Prints",
// 				"Hanging Canvas",
// 			],
// 		},
// 		{
// 			name: "Tapestries",
// 			img: "/categories/tapestries.webp",
// 			hasDropdown: true,
// 			dropdownItems: ["Wall Mural - Stone Grain", "Wall Mural - Canvas Grain", "Wall Mural - Timber Grain"],
// 		},
// 		{ name: "Rugs & Mats", img: "/categories/rugs-mats.webp", hasDropdown: true, dropdownItems: [] },
// 		{ name: "Pillows", img: "/categories/pillows.webp", hasDropdown: true, dropdownItems: [] },
// 		{ name: "Curtains", img: "/categories/curtains.webp", hasDropdown: true, dropdownItems: [] },
// 		{ name: "Custom Fabric", img: "/categories/custom-fabric.webp", hasDropdown: false },
// 		{ name: "Pet Zone", img: "/categories/pet-zone.webp", hasDropdown: true, dropdownItems: [] },
// 		{ name: "Clothing", img: "/categories/clothing.webp", hasDropdown: true, dropdownItems: [] },
// 		{ name: "More", img: "/categories/more.webp", hasDropdown: true, dropdownItems: [] },
// 		{ name: "Theme", img: "/categories/theme.webp", hasDropdown: true, dropdownItems: [] },
// 	];

// 	return (
// 		<>
// 			<div className="bg-white border-t border-gray-300 py-3 relative">
// 				<div className="max-w-screen-xl mx-auto flex items-center justify-evenly gap-6 overflow-x-auto px-4">
// 					{categories.map((cat, idx) => (
// 						<div
// 							key={idx}
// 							className="flex flex-col items-center text-sm cursor-pointer"
// 							onMouseEnter={() => setActiveCategory(cat.name)}
// 							onMouseLeave={() => setActiveCategory(null)}
// 							ref={(el) => (categoryRefs.current[cat.name] = el)}
// 						>
// 							<Image src={cat.img} alt={cat.name} width={65} height={65} className="rounded-full" />
// 							{/* Fix layout shift by using a fixed height and preventing font-weight changes */}
// 							<div className="h-5 flex items-center justify-center mt-1">
// 								<span className={`whitespace-nowrap font-normal ${activeCategory === cat.name ? "text-pink-500" : "text-gray-700"}`}>
// 									{cat.name}
// 								</span>
// 							</div>
// 						</div>
// 					))}
// 				</div>
// 			</div>

// 			{/* Dropdown positioned precisely aligned with category */}
// 			{activeCategory && categories.find((cat) => cat.name === activeCategory)?.hasDropdown && (
// 				<div
// 					className="fixed z-50"
// 					style={{
// 						top: `${dropdownPosition.top}px`,
// 						left: `${dropdownPosition.left}px`,
// 						transform: "translateX(-50%)",
// 						width: "700px",
// 						marginTop: "5px",
// 					}}
// 					onMouseEnter={() => setActiveCategory(activeCategory)}
// 					onMouseLeave={() => setActiveCategory(null)}
// 				>
// 					<div className="bg-white shadow-lg rounded border border-gray-200">
// 						{activeCategory === "Wall Arts" && (
// 							<div className="flex p-5">
// 								<div className="w-1/3 pr-4">
// 									<div className="grid grid-cols-1 gap-3">
// 										{categories
// 											.find((cat) => cat.name === "Wall Arts")
// 											.dropdownItems.map((item, i) => (
// 												<div key={i} className="flex items-center text-left hover:text-pink-500 cursor-pointer">
// 													<span className="text-sm">{item}</span>
// 													<span className="ml-2 text-pink-500">›</span>
// 												</div>
// 											))}
// 									</div>
// 								</div>
// 								<div className="w-2/3 pl-4 border-l border-gray-200">
// 									<div className="text-lg font-medium text-gray-800">Let your walls</div>
// 									<div className="text-xl font-medium text-pink-500 mb-4">do the talking</div>
// 									<div className="grid grid-cols-2 gap-4">
// 										<div className="bg-gray-900 rounded h-48 w-full flex items-center justify-center">
// 											{/* Constellation pattern placeholder */}
// 											<div className="text-white text-xs">Star Pattern</div>
// 										</div>
// 										<div className="rounded h-48 w-full bg-amber-50 flex items-center justify-center">
// 											{/* Room view placeholder */}
// 											<div className="text-gray-800 text-xs">Room View</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						)}

// 						{activeCategory === "Tapestries" && (
// 							<div className="p-5">
// 								<div className="grid grid-cols-1 gap-3">
// 									{categories
// 										.find((cat) => cat.name === "Tapestries")
// 										.dropdownItems.map((item, i) => (
// 											<div key={i} className="flex items-center text-left hover:text-pink-500 cursor-pointer">
// 												<span className="text-sm">{item}</span>
// 											</div>
// 										))}
// 								</div>
// 							</div>
// 						)}

// 						{activeCategory !== "Wall Arts" && activeCategory !== "Tapestries" && (
// 							<div className="p-5">
// 								<div className="text-sm text-gray-500">Dropdown items for {activeCategory}</div>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 			)}
// 		</>
// 	);
// }

import Image from "next/image";
export default function Categories() {
	const categories = [
		{ name: "All", img: "/categories/all.webp" },
		{ name: "Wall Arts", img: "/categories/wall-arts.webp" },
		{ name: "Tapestries", img: "/categories/tapestries.webp" },
		{ name: "Rugs & Mats", img: "/categories/rugs-mats.webp" },
		{ name: "Pillows", img: "/categories/pillows.webp" },
		{ name: "Curtains", img: "/categories/curtains.webp" },
		{ name: "Custom Fabric", img: "/categories/custom-fabric.webp" },
		{ name: "Pet Zone", img: "/categories/pet-zone.webp" },
		{ name: "Clothing", img: "/categories/clothing.webp" },
		{ name: "More", img: "/categories/more.webp" },
		{ name: "Theme", img: "/categories/theme.webp" },
	];
	return (
		<div className="bg-white border-t border-gray-300 py-3 min-h-[120px]">
			<div className="max-w-screen-xl mx-auto flex items-center justify-evenly gap-6 overflow-x-auto px-4">
				{categories.map((cat, idx) => (
					<div key={idx} className="w-[85px] flex flex-col items-center text-sm text-gray-700 cursor-pointer ">
						<Image src={cat.img} alt={cat.name} width={65} height={65} className="rounded-full w-[65px] h-[65px]" priority />
						<span className="mt-1 whitespace-nowrap">{cat.name}</span>
					</div>
				))}
			</div>
		</div>
	);
}
