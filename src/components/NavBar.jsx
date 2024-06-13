import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
	return (
		<nav className="w-100 flex justify-between items-center pt-5 pb-20  xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-4 font-rob">
			<div className="text-2xl ">
				<Link to="/" className="cursor-pointer">5K IPTV Provider</Link>
			</div>
			<ul className="navLinks items-center gap-8 text-[1.1rem]  lg:flex xl:flex 2xl:flex  hidden">
				<Link to="/">Home</Link>
				<Link to="/price">Price</Link>
				<Link to="/abouts">About Us</Link>
				<Link to="/become-resellser">Become Reseller</Link>
				<Link to="/services">Other Service</Link>
				<Link to="/FAQ">faq</Link>
				<Link to="/contact_us">Contactus</Link>
				<div className="btn">
					<button className=" px-7 py-3 bg-yellow-300 rounded-md">
						<a href="https://wa.me/+966503304913">Get Now </a>
					</button>
				</div>
			</ul>
		</nav>
	);
}
