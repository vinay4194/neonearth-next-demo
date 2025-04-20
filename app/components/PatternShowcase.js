import Image from "next/image";

const patterns = [
	{ img: "/patterns/pattern1.webp", label: "Neon Designs" },
	{ img: "/patterns/pattern2.webp", label: "Spring Summer" },
	{ img: "/patterns/pattern3.webp", label: "Vintage" },
	{ img: "/patterns/pattern4.webp", label: "Abstract" },
	{ img: "/patterns/pattern5.webp", label: "Space and Astronomy" },
	{ img: "/patterns/pattern6.webp", label: "Nature" },
	{ img: "/patterns/pattern7.webp", label: "Kids" },
	{ img: "/patterns/pattern8.webp", label: "Geometric" },
	{ img: "/patterns/pattern9.webp", label: "Minimalist" },
	{ img: "/patterns/pattern10.webp", label: "Botanical" },
];

export default function PatternShowcase() {
	return (
		<section className="py-12 px-4">
			<h2 className="text-xl md:text-2xl text-center mb-10">We Curate, You Create - Explore 60K+ Designs</h2>

			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
				{patterns.map((pattern, idx) => (
					<div key={idx} className="flex flex-col items-center">
						<div className="w-[230px] h-[230px] rounded border border-gray-300 p-4 overflow-hidden group">
							<div className="relative w-full h-full">
								<Image
									src={pattern.img}
									alt={pattern.label}
									height={400}
									width={400}
									className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-117 cursor-pointer"
								/>
							</div>
						</div>
						<p className="mt-2 text-sm text-center">{pattern.label}</p>
					</div>
				))}
			</div>

			<div className="flex justify-center mt-10">
				<button className="bg-pink-500 text-white text-sm font-medium px-6 py-2 mb-3 rounded shadow hover:bg-pink-600 cursor-pointer">
					Explore More Designs
				</button>
			</div>
		</section>
	);
}
