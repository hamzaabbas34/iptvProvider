import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./nav.css";

export default function NavBar() {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	return (
		<nav className="w-100 flex justify-between items-center pt-5 pb-20 xl:px-40 lg:px-20 2xl:px-60 md:px-12 px-4 font-rob">
			<div className="text-2xl">
				<Link to="/" className="cursor-pointer">
					5K IPTV Provider
				</Link>
			</div>
			<ul className="navLinks items-center gap-[1.3rem] text-[1.1rem] hidden lg:flex xl:flex 2xl:flex mysp">
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/price">Price</Link>
				</li>
				<li>
					<Link to="/abouts">About Us</Link>
				</li>
				<li>
					<Link to="/become-resellser">Become Reseller</Link>
				</li>
				<li>
					<Link to="/services">Other Service</Link>
				</li>
				<li>
					<Link to="/FAQ">FAQ</Link>
				</li>
				<li>
					<Link to="/contact_us">Contact Us</Link>
				</li>
				<li className="btn">
					<button className="px-7 py-3 bg-yellow-300 rounded-md">
						<a href="https://wa.me/+966503304913">Get Now</a>
					</button>
				</li>
			</ul>
			<div className="lg:hidden xl:hidden 2xl:hidden" onClick={toggleSidebar}>
				<Icon
					icon="ic:round-menu"
					width="2rem"
					height="2rem"
					style={{ color: "white" }}
				/>
			</div>

			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 w-80 h-full bg-black text-white z-50 transform ${
					isSidebarOpen ? "translate-x-0" : "translate-x-full"
				} transition-transform duration-300 ease-in-out`}>
				<div className="p-4 flex justify-between items-center">
					<span className="text-2xl">Menu</span>
					<Icon
						icon="ic:round-close"
						width="2rem"
						height="2rem"
						onClick={toggleSidebar}
					/>
				</div>
				<ul className="flex flex-col gap-4 p-4">
					<li>
						<Link to="/" onClick={toggleSidebar}>
							Home
						</Link>
					</li>
					<li>
						<Link to="/price" onClick={toggleSidebar}>
							Price
						</Link>
					</li>
					<li>
						<Link to="/abouts" onClick={toggleSidebar}>
							About Us
						</Link>
					</li>
					<li>
						<Link to="/become-resellser" onClick={toggleSidebar}>
							Become Reseller
						</Link>
					</li>
					<li>
						<Link to="/services" onClick={toggleSidebar}>
							Other Service
						</Link>
					</li>
					<li>
						<Link to="/FAQ" onClick={toggleSidebar}>
							FAQ
						</Link>
					</li>
					<li>
						<Link to="/contact_us" onClick={toggleSidebar}>
							Contact Us
						</Link>
					</li>
					<li className="btn">
						<button className="px-7 py-3 bg-yellow-300 rounded-md">
							<a href="https://wa.me/+966503304913" onClick={toggleSidebar}>
								Get Now
							</a>
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
}
