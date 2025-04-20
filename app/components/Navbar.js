import Image from "next/image";
import Link from "next/link";
import Categories from "./Categories";
import { Heart, ShoppingBag, User, Search } from "lucide-react";

export default function Navbar() {
	return (
		<header className="bg-white  top-0 z-30">
			<div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
				{/* Logo */}
				<Link href="/">
					<div className="relative w-[180px] h-[60px]">
						<Image src="/neonearth-logo.webp" alt="Neon Earth Logo" fill sizes="180px" className="object-contain  " priority />
					</div>
				</Link>

				{/* Search Bar + Button */}
				<div className="flex-1 mx-6 max-w-3xl  flex relative">
					<input
						type="text"
						placeholder="Find What Brings You Joy"
						className="flex-grow border-4 border-gray-200 rounded-md px-4 py-2 focus:outline-none "
					/>
					<button
						aria-label="Search"
						title="Search"
						className="absolute top-1/2 right-[4px] -translate-y-1/2 bg-pink-600 px-3 py-2 rounded-r-sm text-white hover:bg-pink-600"
					>
						<Search />
					</button>
				</div>

				{/* Icons */}
				<div className="flex items-center gap-4 text-gray-600 min-h-[40px]">
					{/* Wishlist Icon */}
					<div className="relative cursor-pointer w-5 h-5 flex items-center justify-center">
						<Heart className="w-5 h-5 shrink-0" />
					</div>

					<div className="relative cursor-pointer w-5 h-5 flex items-center justify-center">
						<ShoppingBag className="w-5 h-5 shrink-0" />
						<span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full leading-none">
							0
						</span>
					</div>

					<div className="relative cursor-pointer w-5 h-5 flex items-center justify-center">
						<User className="w-5 h-5 shrink-0" />
					</div>

					<div className="cursor-pointer text-sm whitespace-nowrap min-w-[70px] text-center">Join/Login</div>
				</div>
			</div>

			<Categories />
		</header>
	);
}
