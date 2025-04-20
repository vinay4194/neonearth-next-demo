import dynamic from "next/dynamic";

import Navbar from "./components/Navbar";
import Image from "next/image";
import { Truck, BadgePercent } from "lucide-react";
import DecorHotspot from "./components/DecorHotspot";

const ProductShowcase = dynamic(() => import("./components/ProductsShowCase"));
const PatternShowcase = dynamic(() => import("./components/PatternShowcase"));
const PersonalizationPicks = dynamic(() => import("./components/PersonalizationPicks"));
const HomepageVideoSection = dynamic(() => import("./components/HomepageVideoSection"));
const MiddleSection = dynamic(() => import("./components/MiddleSection"));
const BlogSection = dynamic(() => import("./components/BlogSection"));
const MoreInfo = dynamic(() => import("./components/MoreInfo"));
const Footer = dynamic(() => import("./components/Footer"));
import { topProducts, trendingProducts, Curtains, Pillows, Tapestries, Walls } from "./data/products";

export default function HomePage() {
	return (
		<div className="relative w-full min-h-screen bg-white font-sans">
			{/* Top Alert Banner */}
			<div className="bg-orange-100 text-center text-sm py-2.5 px-4 flex justify-center items-center font-medium text-gray-700 min-h-[44px]">
				<div className="flex items-center gap-0 flex-wrap justify-center max-w-screen-xl w-full">
					<span className="flex items-center gap-1 whitespace-nowrap min-w-[175px] justify-center text-[13px]">
						<Truck className="w-4 h-4 shrink-0" />
						Free Shipping Above $60
					</span>
					<span className="hidden sm:inline sm:mx-1">|</span>
					<span className="flex items-center gap-1 whitespace-nowrap justify-center min-w-[300px] h-[22px] leading-[22px] text-[13px]">
						<span className="inline-block w-4 h-4 align-middle shrink-0">
							<BadgePercent className="w-4 h-4" />
						</span>
						Up to 20% OFF Sitewide. Use Code: REFRESH
					</span>
				</div>
			</div>

			{/* Navbar & Category Menu */}
			<Navbar />

			{/* Hero Section */}
			{/* <section className="relative w-full overflow-hidden mt-6" style={{ height: "auto" }}> */}
			<div className="relative w-full h-[460px] max-w-[1600px] mx-auto">
				<Image
					src="/hero-img.webp"
					alt="Spring Home Decor Room"
					fill
					sizes="(max-width: 768px) 100vw, 1600px"
					priority
					className="object-cover"
				/>
			</div>
			{/* <Image src="/hero-img.webp" alt="Spring Home Decor Room" width={1600} height={460} priority className="w-[1600px] h-[460px]" /> */}
			{/* </section> */}
			<div className="relative w-full max-w-[1600px] h-[100px] mx-auto shadow">
				<Image src="/multipleitems.webp" alt="details" fill sizes="(max-width: 768px) 100vw, 1600px" priority className="object-cover" />
			</div>
			<ProductShowcase heading={"Personalized Living Starts Here"} buttonLable={"Start Creating"} products={topProducts} />
			<PatternShowcase />
			{/* <Image src={"/personalizeDecor.webp"} alt="detials" width={1600} height={800} /> */}
			<DecorHotspot />
			<PersonalizationPicks />
			<HomepageVideoSection />
			<ProductShowcase heading={"Trending Custom Home Decor"} buttonLable={"Create a New Trend"} products={trendingProducts} />
			<MiddleSection data={Curtains} />
			<MiddleSection data={Walls} />
			<MiddleSection data={Pillows} />
			<MiddleSection data={Tapestries} />
			<BlogSection />
			<MoreInfo />
			<Footer />
		</div>
	);
}
