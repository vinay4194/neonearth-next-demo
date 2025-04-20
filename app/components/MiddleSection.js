// app/components/MiddleSection.js
import Image from "next/image";

export default function MiddleSection({ data }) {
	const { title, subtitle, mainImage, items, buttonText, buttonUrl } = data;

	return (
		<section className="py-10 px-4 flex justify-center">
			<div className="max-w-screen-xl w-full relative">
				{/* Offset Border Container */}
				<div className="relative w-[calc(100%-70px)] ml-[70px] border border-gray-300 rounded-xl p-6 py-12  pl-6 md:pl-10  ">
					<div className="flex flex-col md:flex-row items-start gap-8">
						{/* Large Image on the Left */}
						<div className="absolute -left-26 top-1/2 transform -translate-y-1/2 z-20 bg-white rounded shadow w-[400px] h-[304px]">
							<Image src={mainImage} alt="Main" fill className="rounded object-cover" sizes="(max-width: 768px) 200px, 400px" />
						</div>

						{/* Right Content */}
						<div className="w-full md:ml-[300px]">
							<h3 className="text-xl md:text-2xl mb-1">{title}</h3>
							<p className="text-sm text-gray-600 mb-10">{subtitle}</p>

							<div className="flex flex-wrap gap-4">
								{items.map((item, idx) => (
									<div key={idx} className="flex flex-col items-center w-[180px]">
										<div className="w-[130px] h-[130px] relative rounded-md overflow-hidden group">
											<Image
												src={item.img}
												alt={item.label}
												fill
												// width={200}
												// height={200}
												sizes="(max-width: 768px) 100px, 130px"
												quality={100}
												className="object-cover cursor-pointer transition-transform duration-500 ease-in-out group-hover:scale-117"
											/>
										</div>
										<p className="mt-2 text-md text-center">{item.label}</p>
									</div>
								))}
							</div>

							<div className="mt-6 flex justify-center pr-28">
								<a href={buttonUrl}>
									<button className="bg-pink-500 text-white text-sm font-medium px-5 py-2 rounded shadow hover:bg-pink-600">
										{buttonText}
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
