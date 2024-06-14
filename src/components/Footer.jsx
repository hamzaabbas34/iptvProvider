import React from "react";
import { Link } from "react-router-dom";
export default function Footer() {
	return (
		<footer className="w-100  bg-[#424769] py-10">
			<div className="w-100 grid grid-cols-2  2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 text-white xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 pb-10 ">
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-yellow-300 py-8">About</h2>
					<p>We are a cutting-edge business</p>
					<p>that offers premium IPTV</p>
					<p>(Internet Protocol television)</p>
					<p>subscriptions as an IPTV service</p>
					<p>provider.</p>
					<div className="links">inst - whatsapp - other </div>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-yellow-400 py-8">
						Quick Links
					</h2>
					<p>
						<Link to="/">Home</Link>
					</p>
					<p>
						<Link to="/become-resellser">Became Resellar </Link>
					</p>
					<p>
						<Link to="/price">Prices</Link>
					</p>
					<p>
						<Link to="/faq">FAQ</Link>
					</p>
					<p>
						<Link to="">Contact_us</Link>
					</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-yellow-400 py-8">
						Our Service
					</h2>
					<p>5 credit</p>
					<p>10 credit</p>
					<p>15 credit</p>
				</div>
				<div className="flex flex-col gap-2">
					<h2 className="text-2xl font-bold text-yellow-400 py-8">
						Free Estimate
					</h2>
					<p>Call Us: +966503304913</p>
					<p className="flex flex-wrap">5kiptvprovider<p>@gmail.com</p></p>
				</div>
			</div>
			<div className="grid grid-cols-1  2xl:grid-cols-2  xl:grid-cols-2  md:grid-cols-2  xl:px-40 lg:px-20 2xl:px-64  md:px-12 place-items-center text-white border-t border-t-gray-400  py-10">
				<p>Copyright © 2024 4k IP TV Providers</p>
				<h2>5kiptvprovider@gmail.com</h2>
			</div>
		</footer>
	);
}
