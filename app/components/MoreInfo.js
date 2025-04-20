"use client";

import { useState } from "react";

export default function MoreInfo() {
	const [expanded, setExpanded] = useState(false);

	return (
		<section className="py-12 px-4 max-w-screen-xl mx-auto">
			<h2 className="text-2xl md:text-3xl font-semibold text-center mb-6">Buy Customized Home Decor for Every Corner of Your Living Space</h2>

			<div className="text-sm text-gray-800 space-y-4">
				<p>
					<strong>Neon Earth</strong>, a leading US-based e-commerce company, specializes in selling customized and personalized{" "}
					<span className="text-pink-500">Wall Arts</span>, wallpapers, <span className="text-pink-500">Rugs</span>,{" "}
					<span className="text-pink-500">Pillows</span>, <span className="text-pink-500">Tapestries</span>,{" "}
					<span className="text-pink-500">Curtains</span>, wall prints & frames,
					<span className="text-pink-500"> Pet Zone</span>, <span className="text-pink-500">Bags</span>, and many{" "}
					<span className="text-pink-500">More</span>.
				</p>

				<p>
					Shape your design just the way you want. Whether it&#3;s an image, picture, or text, just upload your choice, scale it as you like, and
					we&#3;ll print it for you. Plus, for even more options, <span className="text-pink-500">explore</span> our range of templates.
					Everything can be personalized to fit your style – choose the size, fabric and color that suits you best.
				</p>

				<p className="font-semibold text-lg mt-6">Customizable Products offered by Neon Earth</p>

				<p>
					Explore our wide selection of customizable home decor and lifestyle products, catering to your preferred theme – be it kids, vintage,
					abstract, minimalist, traditional, space, nature, food and drink, trending, or more.
				</p>

				<ul className="list-none space-y-2">
					<li>
						<strong>Wall Murals:</strong> Choose <span className="text-pink-500">custom wall murals</span> that evoke positive emotions or
						reflect the ambiance you want to create in a particular space.
					</li>
					<li>
						<strong>Wallpapers:</strong> Tailor each <span className="text-pink-500">custom wallpaper</span> to complement the specific decor of
						individual rooms, ensuring a cohesive and well-coordinated overall aesthetic.
					</li>
					<li>
						<strong>Tapestries:</strong> <span className="text-pink-500">Custom tapestries</span> elevate your home, serving as personalized
						wall hangings or beach blankets.
					</li>
					<li>
						<strong>Pillows:</strong> Elevate your comfort and décor with our throw pillows, perfect for adding a cozy touch to any space.
					</li>
					<li>
						<strong>Cushion Pillows & Covers:</strong> Refresh and protect your cushion pillows effortlessly with our stylish covers, ensuring
						both comfort and durability.
					</li>
					<li>
						<strong>Curtains:</strong> Design curtains that complement your interior decor.
						<span className="text-pink-500"> Custom curtains</span> allow you to control light, showcase unique patterns, and create a cohesive
						design theme in your space.
					</li>
					<li>
						<strong>Custom Door Mats:</strong>
						<span className="text-pink-500"> Personalized door mats</span> welcome guests with a touch of your personality. They can be
						customized with names, quotes, or images, adding a warm and inviting touch to your entrance.
					</li>
				</ul>

				{expanded && (
					<div className="space-y-4 mt-4">
						<ul className="list-none space-y-2">
							<li>
								<strong>Custom Coasters:</strong> Create <span className="text-pink-500">custom coasters</span> featuring artwork, quotes, or
								logos. They serve both a functional purpose and add a touch of personalization to your home or office.
							</li>
							<li>
								<strong>Custom Aprons:</strong> <span className="text-pink-500">Personalized aprons</span> are great for businesses, cooking
								enthusiasts, or as gifts. They add a professional touch to kitchen activities while reflecting individual style.
							</li>
							<li>
								<strong>Pet Zone:</strong> Personalized pet accessories at hand. Buy custom <span className="text-pink-500">pet beds</span>{" "}
								and more.
							</li>
							<li>
								<strong>Bags:</strong> <span className="text-pink-500">Custom tote bags</span> are perfect for promotional giveaways or as
								stylish, eco-friendly alternatives for shopping.
							</li>
							<li>
								<strong>Custom T-shirts and Hoodies:</strong> Design <span className="text-pink-500">custom t-shirts</span> and
								<span className="text-pink-500"> custom hoodies</span> to express your creativity.
							</li>
							<li>
								<strong>Custom Mugs:</strong> <span className="text-pink-500">Custom mugs</span> with text, images, or logos are ideal for
								office aesthetics, gifts, or promotions.
							</li>
						</ul>

						<p className="text-sm">
							Whether you&#3;re setting into a new home, giving your current space a new look or looking for a special gift, we&#3;;re here to
							make it easy, exciting, and uniquely yours. Your personalized items are meticulously packed and delivered to your doorstep, with
							swift and secure shipping available in the US and Canada.
						</p>
					</div>
				)}

				<div className="mt-4">
					<button onClick={() => setExpanded(!expanded)} className="text-pink-500 text-sm font-medium hover:underline">
						{expanded ? "Read less" : "Read more"}
					</button>
				</div>
			</div>
		</section>
	);
}
