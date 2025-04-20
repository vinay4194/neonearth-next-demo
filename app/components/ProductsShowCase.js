// "use client";
// // app/components/ProductShowcase.js
// import Image from "next/image";
// import { useState } from "react";

// export default function ProductShowcase({ heading, buttonLable, products = [] }) {
// 	const [autoFit, setAutoFit] = useState(() => products.map(() => true));

// 	const toggleAutoFit = (index) => {
// 		setAutoFit((prev) => {
// 			const updated = [...prev];
// 			updated[index] = !updated[index];
// 			return updated;
// 		});
// 	};

// 	return (
// 		<section className="py-10 px-4">
// 			<h2 className="text-2xl md:text-2xl text-center mb-5 mt-4"> {heading}</h2>

// 			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
// 				{products.map((product, index) => (
// 					<div key={index} className="flex flex-col items-center">
// 						<div className="border border-gray-300 rounded-lg p-2 w-full flex flex-col items-center">
// 							<div className="w-full h-65 relative">
// 								<div
// 									className="absolute top-[1px] left-[1px] flex items-center gap-2 bg-white text-xs font-medium p-1 rounded shadow border border-gray-300 cursor-pointer"
// 									onClick={() => toggleAutoFit(index)}
// 								>
// 									Auto fit
// 									<div
// 										className={`w-[25px] h-[14px] rounded-full relative transition-colors duration-300 ${
// 											autoFit[index] ? "bg-pink-500" : "bg-gray-300"
// 										}`}
// 									>
// 										<div
// 											className={`w-[10px] h-[10px] bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
// 												autoFit[index] ? "translate-x-[13px]" : "translate-x-0.5"
// 											}`}
// 										></div>
// 									</div>
// 								</div>
// 								<Image
// 									src={product.img}
// 									alt={product.title}
// 									height={400}
// 									width={400}
// 									// fill
// 									className="object-contain rounded mt-8 height-[400px] width-[300px] "
// 								/>
// 							</div>
// 						</div>

// 						<p className="text-sm text-center mt-4 leading-tight max-w-[180px] h-[40px] flex items-center justify-center text-wrap text-balance font-semibold">
// 							{product.title}
// 						</p>

// 						{/* Price aligned horizontally */}
// 						<div className="mt-4 bg-gray-100 text-xs px-3 py-1 rounded ">
// 							{product.addPrefix ? "Starting at " : ""}
// 							<span className="font-bold">{product.price}</span>
// 						</div>
// 					</div>
// 				))}
// 			</div>

// 			<div className="flex justify-center mt-10">
// 				<button className="bg-pink-500 text-white text-sm font-medium px-6 py-2 rounded shadow hover:bg-pink-600">{buttonLable}</button>
// 			</div>
// 		</section>
// 	);
// }

"use client";
// app/components/ProductShowcase.js
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
// import DesignProductPreview from "./DesignProductPreview";
const DesignProductPreview = dynamic(() => import("./DesignProductPreview"), { ssr: false });
import { useDesign } from "../context/DesignContext";

export default function ProductShowcase({ heading, buttonLable, products = [] }) {
	const [autoFit, setAutoFit] = useState(() => products.map(() => true));
	const { design } = useDesign();

	const toggleAutoFit = (index) => {
		setAutoFit((prev) => {
			const updated = [...prev];
			updated[index] = !updated[index];
			return updated;
		});
	};

	return (
		<section className="py-10 px-4">
			<h2 className="text-2xl md:text-2xl text-center mb-5 mt-4">{heading}</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-screen-xl mx-auto">
				{products.map((product, index) => (
					<div key={index} className="flex flex-col items-center">
						<div className="border border-gray-300 rounded-lg p-2 w-full flex flex-col items-center">
							<div className="w-full h-65 relative overflow-hidden">
								<div
									className="absolute top-[1px] left-[1px] flex items-center gap-2 bg-white text-xs font-medium p-1 rounded shadow border border-gray-300 cursor-pointer z-10"
									onClick={() => toggleAutoFit(index)}
								>
									Auto fit
									<div
										className={`w-[25px] h-[14px] rounded-full relative transition-colors duration-300 ${
											autoFit[index] ? "bg-pink-500" : "bg-gray-300"
										}`}
									>
										<div
											className={`w-[10px] h-[10px] bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
												autoFit[index] ? "translate-x-[13px]" : "translate-x-0.5"
											}`}
										></div>
									</div>
								</div>

								{design && autoFit[index] ? (
									<DesignProductPreview
										productImg={product.img}
										maskImg={product.mask}
										width={220}
										height={220}
										overlayBox={product.overlay}
									/>
								) : (
									<Image
										src={product.img}
										alt={product.title}
										height={400}
										width={400}
										className="object-contain rounded mt-8 height-[400px] width-[300px]"
									/>
								)}
							</div>
						</div>

						<p className="text-sm text-center mt-4 leading-tight max-w-[200px] h-[40px] flex items-center justify-center text-wrap text-balance ">
							{product.title}
						</p>

						<div className="mt-4 bg-gray-100 text-xs px-3 py-1 rounded">
							{product.addPrefix ? "Starting at " : ""}
							<span className="font-bold">{product.price}</span>
						</div>
					</div>
				))}
			</div>

			<div className="flex justify-center mt-10">
				<button className="bg-pink-500 text-white text-sm font-medium px-6 py-2 rounded shadow hover:bg-pink-600">{buttonLable}</button>
			</div>
		</section>
	);
}
