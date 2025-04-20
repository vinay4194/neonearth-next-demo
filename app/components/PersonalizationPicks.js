import Image from "next/image";

const picks = [
	{ name: "Area Rugs", img: "/personalizedPicks/pick1.webp" },
	{ name: "Photo And Art Prints", img: "/personalizedPicks/pick2.webp" },
	{ name: "Poster Prints", img: "/personalizedPicks/pick3.webp" },
	{ name: "Acrylic Prints", img: "/personalizedPicks/pick4.webp" },
	{ name: "Canvas Prints", img: "/personalizedPicks/pick5.webp" },
	{ name: "Tapestries", img: "/personalizedPicks/pick6.webp" },
];

export default function PersonalizationPicks() {
	return (
		<section className="py-15 px-4">
			<h2 className="text-2xl text-center mb-8">Top Personalization Picks</h2>

			<div className="flex flex-wrap justify-between gap-6 max-w-screen-xl mx-auto px-4">
				{picks.map((item, index) => (
					<div key={index} className="flex flex-col items-center ">
						{/* <Image src={item.img} alt={item.name} width={125} height={120} className="object-contain cursor-pointer" /> */}
						<div className="relative w-[125px] h-[120px]">
							<Image src={item.img} alt={item.name} fill sizes="(max-width: 768px) 100px, 125px" className="object-contain cursor-pointer" />
						</div>
						<p className="mt-3 text-sm text-center ">{item.name}</p>
					</div>
				))}
			</div>
		</section>
	);
}
