import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Message() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const templateParams = {
			name: name,
			email: email,
			subject: subject,
			message: message,
		};

		emailjs
			.send(
				"service_sk6k9xg",
				"template_kf4tqaa",
				templateParams,
				"m7ldcp3SYbyW-Ma1N"
			)
			.then(
				(response) => {
					console.log("SUCCESS!", response.status, response.text);
					alert("Email sent successfully!");
					setName("");
					setEmail("");
					setSubject("");
					setMessage("");
				},
				(err) => {
					console.error("FAILED...", err);
					alert("Error sending email.");
				}
			);
	};

	return (
		<section>
			<div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 gap-5 xl:px-40 lg:px-20 2xl:px-64 md:px-12 px-5 py-20">
				<div className="flex flex-col justify-center items-start gap-10 ">
					<h2 className="text-6xl font-bold">Let's talk To Us</h2>
					<div className="">
						<h2 className="py-4">
							<span>Phone &rarr; </span> +966 50 330 4913
						</h2>
						<h2 className="">
							<span>Email &rarr; </span> 5kiptvprovider@gmail.com
						</h2>
					</div>
				</div>
				<div className="border-2 border-yellow-400 rounded px-10 py-10">
					<h2 className="text-2xl font-bold">Get A Free Consultation</h2>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								placeholder="Enter here"
								className="border-2 border-yellow-400 rounded ps-2 py-3 outline-none"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="email">Your email</label>
							<input
								type="email"
								id="email"
								placeholder="Enter here"
								className="border-2 border-yellow-400 rounded ps-2 py-3 outline-none"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								id="subject"
								placeholder="Enter here"
								className="border-2 border-yellow-400 rounded ps-2 py-3 outline-none"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								required
							/>
						</div>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="message">Your message (optional)</label>
							<textarea
								id="message"
								rows="8"
								cols="10"
								placeholder="Enter here"
								className="border-2 border-yellow-400 rounded ps-2 py-3 outline-none"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>
						<button
							type="submit"
							className="px-5 py-3 bg-blue-600 text-white mt-7">
							Send
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
