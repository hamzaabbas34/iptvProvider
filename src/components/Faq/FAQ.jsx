import React from "react";
import Front from "../Front";
import Accordion from "../Accordion";
import Footer from "../Footer";

export default function FAQ() {
	return (
		<div>
			<Front title="Frequently Asked Questions To Me" />
			<main className="px-4  xl:px-40 lg:px-20 2xl:px-64  md:px-12 py-28">
				<h2 className="text-5xl font-rob pb-24 font-bold">Frequently Asked Questions</h2>
                <Accordion/>
			</main>
            <Footer/>
		</div>
	);
}
