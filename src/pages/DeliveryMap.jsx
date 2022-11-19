import React from "react"

import locationImage from "./../img/location.svg"

export const DeliveryMap = () => {
	return (
		<>
			<div className="content">
				<h2 className="content__title">Доставка</h2>
				<div className="content__main">
					<h2 className="grayed">Мы находимся по адресу:</h2>
					<ul className="places-list">
						<li>
							<img src={locationImage} alt="location" />
							<span>Приморский</span>
						</li>
						<li>
							<img src={locationImage} alt="location" />
							<span>Крижижановского</span>
						</li>
						<li>
							<img src={locationImage} alt="location" />
							<span>Во</span>
						</li>
					</ul>
					<div className="map">im map</div>
				</div>
			</div>
		</>
	)
}
