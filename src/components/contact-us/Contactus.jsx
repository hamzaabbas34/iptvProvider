import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import emailjs-com for sending emails
import Front from "../Front";
import Footer from "../Footer";

export default function Contactus() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [responseMessage, setResponseMessage] = useState("");

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
					setResponseMessage("Email sent successfully!");
					setName("");
					setEmail("");
					setSubject("");
					setMessage("");
				},
				(err) => {
					console.error("FAILED...", err);
					setResponseMessage("Error sending email.");
				}
			);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubjectChange = (e) => {
		setSubject(e.target.value);
	};

	const handleMessageChange = (e) => {
		setMessage(e.target.value);
	};

	return (
		<div>
			<Front title="Contact Us" />
			<main className="grid grid-cols-1 2xl:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 gap-10 xl:px-40 lg:px-20 2xl:px-64 md:px-12 px-4 py-20 font-rob">
				<div className="flex justify-start items-center">
					<img src="./image/contact.JPG" alt="" />
				</div>
				<div className="border-2 rounded px-10 py-10">
					<h2 className="text-4xl  2xl:text-5xl  xl:text-5xl  md:text-5xl  font-bold pe-4 py-5">
						Any Question? Write Down And Send Us
					</h2>
					<form onSubmit={handleSubmit}>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								placeholder="Enter here"
								value={name}
								onChange={handleNameChange}
								className="border-2 rounded ps-2 py-3"
							/>
						</div>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="email">Your email</label>
							<input
								type="email"
								id="email"
								placeholder="Enter here"
								value={email}
								onChange={handleEmailChange}
								className="border-2 rounded ps-2 py-3"
							/>
						</div>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								id="subject"
								placeholder="Enter here"
								value={subject}
								onChange={handleSubjectChange}
								className="border-2 rounded ps-2 py-3"
							/>
						</div>
						<div className="flex flex-col gap-2 my-3">
							<label htmlFor="message">Your message (optional)</label>
							<textarea
								id="message"
								rows="8"
								cols="10"
								placeholder="Enter here"
								value={message}
								onChange={handleMessageChange}
								className="border-2 rounded ps-2 py-3"
							/>
						</div>
						<div className="btn">
							<button
								type="submit"
								onClick={handleSubmit}
								className="px-8 py-3 bg-blue-500 text-white">
								Submit
							</button>
						</div>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
