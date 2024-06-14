import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

export default function Navbar2() {
	return (
		<div className="flex justify-between items-start py-4 border-b border-white border-opacity-25  xl:px-40 lg:px-20 2xl:px-60  md:px-12 px-4">
			<h2 className="">+966 50 330 4913</h2>
			<p className=" lg:flex xl:flex 2xl:flex  hidden ">
				5kiptvprovider@gmail.com
			</p>
			<div className="links flex justify-center items-center gap-4">
				<a href="https://wa.me/+966503304913">
					<Icon icon="logos:whatsapp-icon" width="2rem" height="2rem" />
				</a>
			</div>
		</div>
	);
}
