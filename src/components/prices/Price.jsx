import React from "react";
import "./price.css";
import Cards from "../Cards";
import Footer from "../Footer";
import Front from "../Front";
export default function Price() {
	return (
		<div className=" w-100 h-auto">
            <Front title="Best Value Plans: Save More Today!"/>
			<section className="px-4 font-rob py-24 xl:px-40 lg:px-20 2xl:px-64  md:px-12">
				<Cards />
			</section>
			<div className="">
				<Footer />
			</div>
		</div>
	);
}
