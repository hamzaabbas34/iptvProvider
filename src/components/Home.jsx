import React, { useState } from "react";
import "./home.css";
import NavBar from "./NavBar";
import Navbar2 from "./Navbar2";
import { Icon } from "@iconify/react";
import Cards from "./Cards";
import Accordion from "./Accordion";
import Footer from "./Footer";
import Message from "./Message";

export default function Home() {
	const [name, setName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");

	const handleSubmit = async (event) => {
		event.preventDefault();
		window.location.href = "https://wa.me/+966503304913"; // Redirect to WhatsApp
		setName(""); // Clear form data
		setPhoneNumber("");
	};

	return (
		<div className="w-100 h-auto font-rob">
			<div className="w-100 hom h-screen lg:h-[110vh]  sm:h-[110vh] text-white  ">
				<Navbar2 />
				<NavBar />
				<div className="content w-[90%] flex  flex-col gap-10 pt-10 leading-10 items-start xl:px-40 lg:px-20 2xl:px-64  md:px-12 ">
					<h2 className=" text-5xl 2xl:text-7xl xl:text-7xl md:text-7xl font-extrabold font-rob px-4 2xl:px-0 xl:px-0 md:px-0">
						19000+ Channels and VOD & Series
					</h2>
					<ul className="list-disc leading-10">
						<li className="ps-5">4K & HD & SD Quality.</li>
						<li className="ps-5">Instant Delivery.</li>
						<li className="ps-5">Immediate access after order.</li>
						<li className="ps-5">24/7 technical support.</li>
						<li className="ps-5">4k Channel. </li>
						<li className="ps-5">Get Over 19k+ Standard & Premium Channels.</li>
					</ul>
					<div className="btn">
						<button className="px-6 py-2 bg-yellow-400  rounded-md  ms-[1rem]  xl:mb[2rem]   lg:ms-[-1rem] xl:ms-[-1rem]  2xl:ms-[-1rem] ">
							Get First Trail
						</button>
					</div>
				</div>
			</div>
			<div className="trailoffer  w-100  xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5  ">
				<div className="bg-white flex justify-between items-center flex-col  md:flex-row  xl:flex-row 2xl:flex-row  py-20 mt-[1rem] 2xl:mt-[-7rem]  xl:mt-[-6rem]  md:mt-[-5rem] px-10 2xl:px-20 xl:px-20  md:px-20 rounded-md shadow-xl gap-3">
					<h2 className="text-3xl font-rob ">Send Trail Request</h2>
					<div className=" flex gap-3 justify-center items-start font-rob  flex-col  md:flex-row  xl:flex-row 2xl:flex-row ">
						<div className="flex flex-col gap-1 text-[1.1rem]">
							<label htmlFor="" className="text-[1rem]">
								Name
							</label>
							<input
								type="text"
								className=" py-2 px-2 rounded border outline-none"
								placeholder="Name"
								name="username"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						<div className="flex flex-col gap-1 text-[1.1rem] ">
							<label htmlFor="" className="text-[1rem]">
								Phone Number
							</label>
							<input
								type="text"
								className=" py-2 px-2 text-[1rem] rounded  2xl:pe-10 xl:pe-10 pe-7 border "
								placeholder="Phone Number"
								value={phoneNumber}
								onChange={(e) => setPhoneNumber(e.target.value)}
							/>
						</div>
						<div className="flex justify-center items-center">
							<button
								onClick={handleSubmit}
								className="px-5 py-3 bg-blue-600 text-white mt-7 ">
								Send
							</button>
							<ul></ul>
						</div>
					</div>
				</div>
			</div>

			<section className="  xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 py-32">
				<main className="grid   grid-cols-1   2xl:grid-cols-2   xl:grid-cols-2   md:grid-cols-1  gap-10 ">
					<div className="flex flex-col gap-6">
						<img src="/image/iptv.jpg" alt="" />
						<div className="flex justify-between items-center ">
							<img src="/image/dollar.png" alt="" />
							<button className=" px-6  md:px-10 xl:px-10   2xl:px-10 py-3  bg-yellow-400">
								<a href="https://wa.me/+966503304913">Contact Agent</a>
							</button>
						</div>
					</div>
					<div className="">
						<h2 className=" 2xl:text-5xl xl:text-5xl md:text-3xl text-3xl font-rob font-bold  2xl:leading-[55px] xl:leading-[45px] leading-[35px]">
							Why you chose 5k IPTV Provider?
						</h2>
						<p className="font-rob  py-2 2xl:leading-[25px] xl:leading-[25px] leading-[20px]">
							We are a cutting-edge business that offers premium 5K IPTV
							(Internet Protocol television) subscriptions as an IPTV service
							from the comfort of your home with 4K IPTV Watch. The 4K IPTV view
							IPTV Service Provider has you covered whether you want to view
							movies, TV series, or live TV. You may have a fluid and
							trouble-free IPTV experience with their user-friendly platform and
							round-the-clock customer service. So why choose cable or satellite
							TV when you can use 4K IPTV Watch to obtain the finest online
							content? Use the 4K IPTV Watch IPTV Service Provider right away to
							improve your TV viewing experience.
						</p>
						<p className="font-rob  lg:flex xl:flex 2xl:flex  hidden">
							At 4K IPTV Provider, we take pride in being a leading IPTV service
							provider, offering top-quality streaming services to enhance your
							home entertainment experience. With our cutting-edge technology
							and extensive channel lineup, we bring you the best of
							internet-based television right to your fingertips.
						</p>
					</div>
				</main>
			</section>
			<div className="w-100 xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 font-rob z-10 ">
				<div className="w-100  flex h-[10rem]  flex-wrap ">
					<div className="w-[50%] 2xl:w-[25%] xl:w-[25%] md:w-[25%]  bg-yellow-400 flex justify-center items-center text-white flex-col">
						<p className="text-3xl  font-bold">15k+</p>
						<span>Years oF Exprences</span>
					</div>
					<div className="w-[50%] 2xl:w-[25%] xl:w-[25%] md:w-[25%] bg-slate-100 flex justify-center items-center flex-col">
						<p className="text-3xl  font-bold">1.5K</p>
						<span>Happy Client</span>
					</div>
					<div className="w-[50%] 2xl:w-[25%] xl:w-[25%] md:w-[25%] bg-black flex justify-center items-center text-white flex-col ">
						<p className="text-3xl  font-bold">2.5k</p>
						<span>Projects Completed</span>
					</div>
					<div className="w-[50%] 2xl:w-[25%] xl:w-[25%] md:w-[25%] bg-yellow-500 flex justify-center items-center text-white flex-col">
						<p className="text-3xl  font-bold">150+</p>
						<span>Trained Staff</span>
					</div>
				</div>
			</div>

			<section>
				<div className=" bg-[#62615c] xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 mt-[-5rem] text-white">
					<div className="py-20 text-center">
						<h2 className="pt-10 text-4xl font-bold">Why 5K IPTV Provider?</h2>
						<div className="w-100 grid grid-cols-2   2xl:grid-cols-3  xl:grid-cols-3  md:grid-cols-3  gap-x-4 py-20 gap-y-8   ">
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
							<h2 className=" px-8 py-4  bg-white bg-opacity-25 font-bold text-[1.3rem] leading-7 text-white ">
								Best Price on the Market Guaranteed
							</h2>
						</div>
					</div>
					<div className="grid 2xl:grid-cols-2  xl:grid-cols-2  md:grid-cols-1 grid-cols-1   gap-10 pb-10">
						<div className="lf flex flex-col justify-center gap-5 ">
							<h2 className="text-4xl font-bold">
								Enjoy All Streaming Platform's Sports Movies, TV Shows & More on
								4K IPTV
							</h2>
							<p>Buy 1 Month Subscription Now & Get</p>
							<p className="text-2xl font-bold text-black">
								30% Off on 3 Months Subscription
							</p>
							<div className="btn">
								<button className="px-6 py-2 bg-yellow-400  rounded-md ">
									<a href="https://wa.me/+966503304913">Get First Trail</a>
								</button>
							</div>
						</div>
						<div className="lf">
							<video src="/image/videos.MOV" autoPlay muted controls></video>
						</div>
					</div>
				</div>
			</section>
			<section className="xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 py-20 ">
				<h2 className="text-4xl font-bold  py-10">
					Six Reasons For People Choosing Us
				</h2>
				<div className="grid place-items-center	 grid-cols-1 md:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3  2xl:gap-10 lg:gap-2 w-100 overflow-x-hidden">
					<div className=" bg-slate-100  py-12  w-[340px]  md:w-[250px]  lg:w-[300px] xl:w-[380px] 2xl:w-[380px] flex justify-center items-center flex-col gap-2">
						<Icon icon="circum:medal" className="text-5xl" />
						<p>quality</p>
					</div>
					<div className=" bg-slate-100  py-12 w-[340px]  md:w-[250px]  lg:w-[300px] xl:w-[380px] 2xl:w-[380px] flex justify-center items-center flex-col gap-2 ">
						<Icon icon="icons8:checked" className="text-5xl" />
						<p>Accredited</p>
					</div>
					<div className=" bg-slate-100  py-12 w-[340px]  md:w-[250px]  lg:w-[300px] xl:w-[380px] 2xl:w-[380px] flex justify-center items-center flex-col gap-2 ">
						<Icon icon="iconoir:profile-circle" className="text-5xl" />
						<p>Customer Support</p>
					</div>
					<div className=" bg-slate-100  py-12 w-[340px]  md:w-[250px]  lg:w-[300px] xl:w-[380px] 2xl:w-[380px] flex justify-center items-center flex-col gap-2 ">
						<Icon icon="tdesign:time" className="text-5xl" />
						<p>Time Availability</p>
					</div>
					<div className=" bg-slate-100  py-12 w-[340px]  md:w-[250px]  lg:w-[300px] xl:w-[380px] 2xl:w-[380px] flex justify-center items-center flex-col gap-2 ">
						<Icon icon="ph:phone-light" className="text-5xl" />
						<p>Quick Response</p>
					</div>
					<div className=" bg-slate-100  py-12 w-[340px]  md:w-[250px]  lg:w-[300px] xl:w-[380px] 2xl:w-[380px] flex justify-center items-center flex-col gap-2 ">
						<Icon icon="ic:baseline-stars" className="text-5xl" />
						<p>Warranty</p>
					</div>
				</div>
				<div className="grid grid-cols-1 2xl:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 py-28  gap-10 md:gap-3 2xl:gap-3 xl:gap-3">
					<div className="border-e">
						<h2 className="text-2xl md:text-[1.2rem] md:leading-6  font-bold">
							We Are Business Who Cares, And it Show
						</h2>
						<p className="md:text-[.9rem] md:leading-5 ">
							OVER 540 “5 STARS” REVIEWS AND CLIMBING
						</p>
					</div>
					<div className="flex  border-e gap-6">
						<img src="/image/yelp.png" alt="" className="w-[90px] " />
						<div className="flex flex-col gap-4 mt-1">
							<p className="text-[1.2rem] font-bold">Rate Us on Yelp</p>
							<p>248 reviews</p>
						</div>
					</div>
					<div className="flex gap-6">
						<img src="/image/google.png" alt="" className="w-[90px]" />
						<div className="flex flex-col gap-4 mt-1">
							<p className="text-[1.2rem] font-bold">Rate Us google </p>
							<p>1248 reviews</p>
						</div>
					</div>
				</div>
			</section>
			<section className=" xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 font-rob">
				<div className="text-center pb-20">
					<h2 className="text-5xl font-bold">Discover Our Best Value Plans</h2>
				</div>
				<Cards />
			</section>
			<Message />

			<section className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2  md:grid-cols-2 gap-10  xl:px-40 lg:px-20 2xl:px-64  md:px-12 px-5 pt-20 pb-20">
				<div className="">
					<h2 className="text-3xl font-bold  pb-8">How to Works</h2>
					<div className="button flex gap-1 ms-[2px] mb-2 relative top-0">
						<button className="px-3 py-4  focus:text-yellow-400">
							Android
						</button>
						<button className="px-4 py-4 focus:text-yellow-400 ">IOS</button>
						<button className="px-4 py-4 focus:text-yellow-400 ">
							Windows / MAC
						</button>
					</div>
					<div className="border-2  border-yellow-400 rounded p-4 flex flex-col gap-5">
						<p>Step 1 : Download the app Smarters Player Lite (here)</p>
						<p>
							Step 2 : Login to the application CLICK ON THE XTREME API CODE and
							login with your subscription details ( Get details from your
							service provider)
						</p>
						<p>
							Step 3 : After Login Get Premium Version to unlocked exclusive
							features.
						</p>
						<p>Can I watch multiple devices at a time?</p>
						<p>
							With a subscription it is possible if u buy 2 3 device , it is
							impossible to watch on multiple devices at the same time if u buy
							one device as many device discount will be apply.
						</p>
					</div>
				</div>
				<div className=" flex flex-col gap-10  mt-[-3rem]">
					<h2 className="text-3xl font-bold  py-8">
						Frequently Asked Questions
					</h2>
					<Accordion />
				</div>
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
}
