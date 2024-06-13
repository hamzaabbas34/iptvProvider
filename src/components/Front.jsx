import React from "react";
import NavBar from "./NavBar";
import Navbar2 from "./Navbar2";

export default function Front({ title }) {
	return (
		<div className="w-100 myimg h-[60vh] 2xl:h-[40vh] xl:h-[60vh] md:h-[60vh] text-white  overflow-x-hidden ">
			<Navbar2 />
			<NavBar />
			<div className="content w-[100%] flex  flex-col gap-10 pt-10 leading-10 items-center text-center 2xl:text-start xl:text-start md:text-start px-4 xl:px-40 lg:px-20 2xl:px-64  md:px-12 ">
				<h2 className=" text-5xl 2xl:text-6xl xl:text-6xl md:text-6xl font-extrabold font-rob  ">
					{title}
				</h2>
			</div>
		</div>
	);
}
