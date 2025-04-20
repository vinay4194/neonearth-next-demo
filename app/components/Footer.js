export default function Footer() {
	return (
		<footer className="bg-black text-white text-sm">
			<div className="max-w-screen-xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-7 gap-8">
				{/* Description */}
				<div className="md:col-span-2 pr-6">
					<h3 className="text-lg font-semibold mb-3">Designs Come True!</h3>
					<p className="leading-relaxed ">
						At the heart of Neon Earth lies the belief that your home is more than just a physical space; it’s a canvas for self-expression.
						Neon Earth acts as an enabler, providing comfort, and the freedom to ‘Create Your New’. Visualize It - Design it - Bring It to life:
						because the final product belongs to you.
					</p>
				</div>

				{/* Footer Links */}
				<div>
					<h4 className="text-lg font-semibold mb-3 text-gray-500">Quick Link</h4>
					<ul className="space-y-2">
						<li>Order a Swatch Kit</li>
						<li>Bulk Quote</li>
						<li>Track Your Order</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-3 text-gray-500">Help</h4>
					<ul className="space-y-2">
						<li>FAQ</li>
						<li>Refund</li>
						<li>Shipping</li>
						<li>Sitemap</li>
						<li>Privacy Policy</li>
						<li>Contact Us</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-3 text-gray-500">Your Account</h4>
					<ul className="space-y-2">
						<li>Your Orders</li>
						<li>Your Wallet</li>
						<li>Saved Designs</li>
					</ul>
				</div>

				<div>
					<h4 className="text-lg font-semibold mb-3 text-gray-500">The Company</h4>
					<ul className="space-y-2">
						<li>About us</li>
						<li>User Agreement</li>
						<li>Blog</li>
					</ul>
				</div>

				{/* Contact */}
				<div>
					<h4 className="text-lg font-semibold mb-3 text-gray-500">Get in touch</h4>
					<ul className="space-y-2">
						<li>wecare@neonearth.com</li>
						<li className="flex items-center gap-3 text-xl">{/* <Pinterest /> <Tiktok /> */}</li>
						<li>(855) 349-6366</li>
					</ul>
				</div>
			</div>

			{/* Bottom section */}
			<div className="border-t border-gray-700 text-xs text-gray-400 px-4 py-6 flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
				<p>Copyright ©2025 neonearth. All Rights Reserved.</p>
				{/* <div className="mt-4 md:mt-0 flex items-center gap-4">
					<span>Payment Methods</span>
					<img src="/payment/visa.svg" alt="Visa" className="h-5" />
					<img src="/payment/mastercard.svg" alt="Mastercard" className="h-5" />
					<img src="/payment/discover.svg" alt="Discover" className="h-5" />
					<img src="/payment/amex.svg" alt="Amex" className="h-5" />
					<img src="/payment/paypal.svg" alt="PayPal" className="h-5" />
					<img src="/payment/applepay.svg" alt="Apple Pay" className="h-5" />
					<img src="/payment/norton.svg" alt="Norton Secured" className="h-5 ml-4" />
				</div> */}
			</div>
		</footer>
	);
}
