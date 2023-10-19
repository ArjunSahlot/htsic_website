import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Get from "./pages/Get";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/get" element={<Get />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
