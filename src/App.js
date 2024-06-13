import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Price from "./components/prices/Price";
import Abouts from "./components/abouts/Abouts";
import Reseller from "./components/reseller/Reseller";
import Service from "./components/Services/Service";
import FAQ from "./components/Faq/FAQ";
import Contactus from "./components/contact-us/Contactus";
import Trail from "./components/RequestTrail/Trail";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/price" element={<Price />} />
					<Route path="/abouts" element={<Abouts />} />
					<Route path="/become-resellser" element={<Reseller />} />
					<Route path="/services" element={<Service />} />
					<Route path="/FAQ" element={<FAQ />} />
					<Route path="/contact_us" element={<Contactus />} />
					<Route path="/user-request" element={<Trail />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
