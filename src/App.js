import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Card from "./component/Card";
import cards from "./data";

function App() {
	console.log(cards);
	const cardEle = cards.map((card) => {
		return <Card key={card.id.toString()} card={card} />;
	});

	return (
		<div className="container">
			<Nav />
			<Hero />
			<div className="cards">{cardEle}</div>
		</div>
	);
}

export default App;
