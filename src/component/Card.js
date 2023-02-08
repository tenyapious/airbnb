import React from "react";
import star1 from "../img/Star 1.png";

function Card(props) {
	let openSpotsStatusText;
	if (props.card.openSpots === 0) {
		openSpotsStatusText = "Sold out";
	} else if (props.card.location === "Online") {
		openSpotsStatusText = "Online";
	}
	console.log(openSpotsStatusText);
	return (
		<div className="card">
			{openSpotsStatusText && (
				<div className="openSpots-status">{openSpotsStatusText}</div>
			)}
			<div className="card-img">
				<img src={props.card.coverImg} alt={props.card.title} />
			</div>
			<div className="card-info">
				<div className="card-stats">
					<span className="card-star">
						<img src={star1} alt="star" />
					</span>
					<span className="card-star-rating">{props.card.stats.ratings}</span>
					<span className="card-review-counts grey">
						({props.card.stats.reviewCount})
					</span>
					<span className="card-country grey">{props.card.location}</span>
				</div>
				<p className="card-title">{props.card.title}</p>
				<p className="card-pricing">
					<b>From ${props.card.price}</b>/person
				</p>
			</div>
		</div>
	);
}

export default Card;
