import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Trail() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/users");
				setUsers(response.data.users);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchData();
	}, []);
	if (users.length < 0) return <p>nothing inside in this </p>;
	console.log(users);
	return (
		<ul>
			{users.map((user, index) => (
				<li key={index}>
					{user.name} {user.phoneNumber}
				</li>
			))}
		</ul>
	);
}
