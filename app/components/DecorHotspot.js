// components/DecorHotspotOverlay.js
"use client";

import Image from "next/image";
import Link from "next/link";

const hotspots = [
	{
		id: 1,
		top: "5%",
		left: "64%",
		href: "/frames",
	},
	{
		id: 2,
		top: "8%",
		left: "30%",
		href: "/wallpaper",
	},
	{
		id: 3,
		top: "15%",
		left: "12%",
		href: "/curtains",
	},
	{
		id: 4,
		top: "50%",
		left: "55%",
		href: "/pillows",
	},
	{
		id: 5,
		top: "77%",
		left: "57%",
		href: "/dog-bed",
	},
	{
		id: 6,
		top: "91%",
		left: "40%",
		href: "/rugs",
	},
];

export default function DecorHotspotOverlay() {
	return (
		<div className="relative w-full max-w-[1600px] mx-auto">
			<Image src="/personalized-banner.webp" alt="Decor Room Hotspot" width={1600} height={742} className="w-full h-auto" priority />

			{hotspots.map((spot) => (
				<Link
					key={spot.id}
					href={spot.href}
					className="absolute z-10 w-9 h-9 border-2 border-white bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md transition-transform duration-300 hover:scale-110 "
					style={{ top: spot.top, left: spot.left }}
					aria-label={`Go to ${spot.href.replace("/", "")}`}
				>
					+
				</Link>
			))}

			<div className="absolute bottom-10 left-40 bg-black/60 bg-opacity-60 text-white text-2xl px-12 py-7 rounded-md flex items-center gap-2">
				<span>Tap</span>
				<span className="w-9 h-9 border-2 border-white bg-pink-500 rounded-full flex items-center justify-center text-white text-2xl shadow-md transition-transform duration-300 hover:scale-110">
					+
				</span>
				<span>to Personalize Decor</span>
			</div>
		</div>
	);
}
