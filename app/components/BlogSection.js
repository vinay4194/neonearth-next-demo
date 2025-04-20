// app/components/BlogSection.js
import Image from "next/image";

const blogs = [
	{
		img: "/blogs/blog1.webp",
		date: "Apr 14th 2025",
		title: "Easter Home Makeover: Tips to Refresh Your Space with Pastel Interior Design",
		summary:
			"As Easter approaches, it’s time to decorate your home with the soothing touches of fresh and mood lifting pastel color scheme. Spring and East...",
		url: "#",
	},
	{
		img: "/blogs/blog2.webp",
		date: "Apr 7th 2025",
		title: "Fitted Bedsheet vs. Mattress Protector: What’s the Difference and Which Do You Need?",
		summary: "Fitted Bedsheet vs. Mattress Protector: What’s the Difference and Which Do You Need?",
		url: "#",
	},
	{
		img: "/blogs/blog3.webp",
		date: "Mar 31st 2025",
		title: "How to Infuse Your Home with Green Design Elements",
		summary:
			"Planning to revamp your home while being kind to the planet? Green home design is all about blending sustainability with style—because a...",
		url: "#",
	},
];

export default function BlogSection() {
	return (
		<section className="py-12 px-4">
			<h2 className="text-2xl md:text-3xl text-center mb-10">Our Blogs in the Buzz</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
				{blogs.map((blog, idx) => (
					<div key={idx} className="flex flex-col">
						<div className="w-full h-44 relative rounded overflow-hidden group">
							<Image
								src={blog.img}
								alt={blog.title}
								fill
								// quality={100}
								sizes="(max-width: 768px) 150px, 300px"
								className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-117 cursor-pointer"
							/>
						</div>
						<p className="text-sm text-gray-500 mt-3">{blog.date}</p>
						<h3 className="text-lg  mt-2 leading-snug">{blog.title}</h3>
						<p className="text-xs text-gray-700 mt-2 line-clamp-3">{blog.summary}</p>
						<a href={blog.url} className="text-pink-500 text-sm font-medium mt-2 hover:underline">
							Tell Me More
						</a>
					</div>
				))}
			</div>

			<div className="flex justify-center mt-10">
				<button className="bg-pink-500 text-white text-sm font-medium px-6 py-2 rounded shadow hover:bg-pink-600">Read All</button>
			</div>
		</section>
	);
}
