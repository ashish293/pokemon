import React from "react";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/search" element={<Search />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
