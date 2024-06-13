import React from "react";
import Footer from "../Footer";
import Front from "../Front";
export default function Reseller() {
	return (
		<div className=" w-100 h-auto">
			<Front title="Become a Reseller" />
			<section className="px-4 xl:px-40 lg:px-20 2xl:px-64  md:px-12 font-rob  py-2">
				<div className="text-center pb-20 bg-[#f8f7f3]">
					<h2 className="text-5xl font-bold">Features</h2>
				</div>
				<LefImage
					para="Our IPTV Reseller Panel is easy to use. You can make customer lines fast, create M3U links, and remove or turn off lines. It has many helpful features. Try our IPTV Reseller Panel for simple and quick IPTV management."
					title="title Easy To Use Iptv Reseller Panel"
					imgurl="/image/first.jpg"
				/>
				<RefImage
					title="Free Trials for Your Customers"
					para="As an IPTV reseller, you can create free trials for your customers. This lets them try the service before buying. It’s a great way to show customers how good your IPTV service is. So, start creating free trials today"
					imgurl="/image/2th.jpg"
				/>
                <br />
				<LefImage
					para="Every IPTV reseller gets free apps from us. The best part? These apps don’t have any brand names on them. This means you can use them as if they are your own. It’s a great way to offer more to your customers, under your own brand."
					title="title Easy To Use Iptv Reseller Panel"
					imgurl="/image/4th.jpg"
				/>
				<RefImage
					title="24/7 Reseller Support "
					para="We provide 24/7 support for our IPTV resellers. Whenever you need help or have a question, we’re here for you."
					imgurl="/image/3rd.jpg"
                    par1='Telegram: http://t.me/Iptvproviders4k'
                    par2='Whatsapp: +447441427720'
                    par3 = ' Email: best4kiptvprovider@gmail.com'
				/>
			</section>
			<div className="">
				<Footer />
			</div>
		</div>
	);
}

function RefImage({ title, para, par1 ,par2 ,par3  ,imgurl }) {
	return (
		<main className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2  gap-10 py-16">
			<div className="">
				<h2 className=" text-5xl font-bold pb-12 ">{title}</h2>
				<p className="leading-[40px]">{para}</p>
                <p>{par1}</p>
                <p>{par2}</p>
                <p>{par3}</p>
			</div>

			<div className="w-100 h-100">
				<img src={imgurl} alt="" className="w-[600px]  h-[400px]" />
			</div>
		</main>
	);
}

function LefImage({ title, para, imgurl }) {
	return (
		<main className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2  gap-10 py-16 ">
			<div className="w-100 h-100">
				<img src={imgurl} alt="" className="w-[600px]  h-[450px]" />
			</div>
			<div className="">
				<h2 className=" text-5xl font-bold pb-12 ">{title}</h2>
				<p className="leading-[40px]">{para}</p>
			</div>
		</main>
	);
}
