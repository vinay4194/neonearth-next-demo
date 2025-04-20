// app/components/HomepageVideoSection.js
"use client";
import UploadDesign from "./UploadDesign";
export default function HomepageVideoSection() {
	return (
		<section className="py-10 px-4 flex justify-center">
			<div className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
				{/* Video Section */}
				<div className="w-full lg:w-1/2">
					<video controls preload="auto" poster="/video-thumbnail.webp" className="w-full rounded-lg shadow-md">
						<source
							src="https://ds5e5and3r3r0.cloudfront.net/neonearth_stg/images/contentimages/images/NE-Homepage-Intro-Video.mp4"
							type="video/mp4"
						/>
						Your browser does not support the video tag.
					</video>
				</div>

				{/* Text Section */}
				<div className="w-full lg:w-1/2 text-center lg:text-center">
					<h3 className="text-2xl md:text-3xl font-semibold mb-4">Personalize Everything</h3>
					<p className="text-gray-600 mb-6">Upload your own design and explore endless customization possibilities!</p>
					{/* <button className="bg-pink-500 text-white text-sm font-medium px-6 py-2 rounded shadow hover:bg-pink-600">Start Exploring</button> */}
					<UploadDesign />
				</div>
			</div>
		</section>
	);
}
