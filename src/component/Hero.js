import React from "react";
import heroImage from "../img/Group 77.png";

function Hero() {
	return (
		<section className="section hero">
			<img src={heroImage} alt="hero" />
			<div className="hero-texts">
				<h2>Online Experiences</h2>
				<p>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</p>
			</div>
		</section>
	);
}

export default Hero;
