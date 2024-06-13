import React from "react";
import Front from "../Front";
import Footer from "../Footer";

export default function Service() {
	return (
		<div>
			<Front title="My Services" />
			<main className=" text-center px-4  xl:px-40 lg:px-20 2xl:px-64  md:px-12 font-rob">
				<h2 className="text-5xl font-bold pt-16  ">
					We Providing Best Services
				</h2>
				<div className="flex justify-center items-center py-20 ">
					<img src="/image/NETFLIX.png" alt="" />
				</div>
				<div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-10 ">
					<div className="flex justify-center items-center">
						<img src="/image/123.jpg" alt="" className="h-[80vh]" />
					</div>
					<div className="flex justify-start items-center">
						<ul className="text-3xl flex justify-start flex-col text-start gap-3 list-disc">
							<li>Netflix Monthly with 5 screen</li>
							<li> Disney monthly</li>
							<li> Microsoft office yearly</li>
							<li>Spotify monthly</li>
							<li> Freepik monthly</li>
							<li>YouTube premium monthly</li>
							<li>HBO monthly</li>
						</ul>
					</div>
				</div>
                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-3 py-20">
                    <h2 className="text-4xl font-bold text-start">In order to Avail These services You can Contact to our Agent</h2>
                    <div className="">
                        <button className="px-20 border-2 border-yellow-400 py-3 hover:bg-yellow-400 hover:text-white"><a href="https://wa.me/+966503304913">Contact To Me </a></button>
                    </div>
                </div>
			</main>
                <Footer/>
		</div>
	);
}
