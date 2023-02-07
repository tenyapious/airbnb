import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Card from "./component/Card";

function App() {
	return (
		<div className="container">
			<Nav />
			<Hero />
			<Card />
		</div>
	);
}

export default App;
