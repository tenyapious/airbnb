import React from "react";
import "./App.css";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Card from "./component/Card";
import data from "./data";

function App() {
	const cardEle = data.map((card) => {
		return <Card key={card.id.toString()} card={card} />;
	});
	return (
		<div className="container">
			<Nav />
			<Hero />
			<div className="cards">{cardEle}</div>
			{/* <div className="cards">
				<Card card={cards[0]} />
			</div> */}
		</div>
	);
}

export default App;
