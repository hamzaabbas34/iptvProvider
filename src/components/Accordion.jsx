import React, { useState } from "react";

function Accordion() {
	const [openIndex, setOpenIndex] = useState(null);

	const toggleAccordion = (index) => {
		setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
	};

	return (
		<div className="divide-y divide-gray-200 border-2 rounded">
			<div>
				<button
					onClick={() => toggleAccordion(1)}
					className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-left cursor-pointer focus:outline-none">
					Is IPTV legal or illegal?
					<svg
						className={`${
							openIndex === 1 ? "transform rotate-180" : ""
						} w-6 h-6 transition-transform`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
				{openIndex === 1 && (
					<div className="py-2 px-4">
						We're not always in the position that we want to be at. We're
						constantly growing. We're constantly making mistakes. We're
						constantly trying to express ourselves and actualize our dreams.
					</div>
				)}
			</div>
			<div>
				<button
					onClick={() => toggleAccordion(2)}
					className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-left cursor-pointer focus:outline-none">
					How fast internet do I Need to have?
					<svg
						className={`${
							openIndex === 2 ? "transform rotate-180" : ""
						} w-6 h-6 transition-transform`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
				{openIndex === 2 && (
					<div className="py-2 px-4">
						Having broadband does not cause any issue for streaming. However, it
						may impact the coverage of your connection. It can also slow down
						the working of choppy stream if it is being drived with WI-FI.
						However, having adequate coverage, any broadband connection that acn
						exceed 8 mbit/s is adequate. If mobile broadband is switched through
						a 3G, 4G, or 5G network then the coverage is the only remaining
						barrier. As adequate internet speed is provided by all mobile
						networks so it will not create an issue. You must have at least 4G
						or an ADSL broadband connection with at least 24 Mbit/s to watch
						IPTV in HD or 4K.
					</div>
				)}
			</div>
			<div>
				<button
					onClick={() => toggleAccordion(3)}
					className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-left cursor-pointer focus:outline-none">
					What devices can I watch on IPTV?
					<svg
						className={`${
							openIndex === 3 ? "transform rotate-180" : ""
						} w-6 h-6 transition-transform`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
				{openIndex === 3 && (
					<div className="py-2 px-4">
						Almost all the devices can be used to to watch IPTV. However, it
						depends on the IPTV service, the user is using. Apps for almost
						every operating system are offered by the market, and having a smart
						TV can help you to run them directly in your TV. A few of the
						operating systems are andriod, used in both mobile devices and
						tablets, and iOS, which is found in Apple products. Windows or Linux
						users can also be benefited by the apps. One have to purchase IPTV
						box if he goes With the TV, that is not a Smart TV.
					</div>
				)}
			</div>
			<div>
				<button
					onClick={() => toggleAccordion(4)}
					className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-left cursor-pointer focus:outline-none">
					Can I watch multiple devices at a time?
					<svg
						className={`${
							openIndex === 4 ? "transform rotate-180" : ""
						} w-6 h-6 transition-transform`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
				{openIndex === 4 && (
					<div className="py-2 px-4">
						With a subscription it is possibe if u buy 2 3 device , it is
						impossible to watch on multiple devices at the same time if u buy
						one device as many device discount will be apply.
					</div>
				)}
			</div>
			<div>
				<button
					onClick={() => toggleAccordion(5)}
					className="flex justify-between items-center w-full py-4 px-4 text-lg font-medium text-left cursor-pointer focus:outline-none">
					What happens After I buy a service?
					<svg
						className={`${
							openIndex === 5 ? "transform rotate-180" : ""
						} w-6 h-6 transition-transform`}
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>
				{openIndex === 5 && (
					<div className="py-2 px-4">
						Yes! You’ll be able buy with the IPTV SUBSCRIPTION PRICING to use
						your T-Mobile Home Internet to connect your computer, phone, and
						numerous other devices in your home simultaneously. People over
						time-we appreciate your patience! As soon as we’re ready for you,
						we’ll let you know
					</div>
				)}
			</div>
		</div>
	);
}

export default Accordion;
