import React from "react";
import card12 from "../img/image 12.png";
import star1 from "../img/Star 1.png";

function Card() {
	return (
		<div className="card section">
			<div className="card-img">
				<img src={card12} />
			</div>
			<div className="card-info">
				<div className="card-stats">
					<span className="card-star">
						<img src={star1} />
					</span>
					<span className="card-star-rating">5.0</span>
					<span className="card-review-counts grey">(6)</span>
					<span className="card-country grey">USA</span>
				</div>
				<p className="card-title">Life lessons with Katie Zaferes</p>
				<p className="card-pricing">
					<b>From $136</b>/person
				</p>
			</div>
		</div>
	);
}

export default Card;
