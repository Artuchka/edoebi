import React from "react"

export const Stocks = () => {
	return (
		<>
			<div className="content">
				<h2 className="content__title">Акции</h2>
				<div className="content__main">
					<div className="content__stocks-list">
						<div className="stock">
							<img
								src="https://via.placeholder.com/150"
								alt=""
								className="stock__image"
							/>
							<div className="stock__info">
								<div className="stock__title">
									BDay discount!
								</div>
								<div className="stock__laws">be good boy</div>
								<div className="stock__date">16.10.2021</div>
							</div>
						</div>
						<div className="stock">
							<img
								src="https://via.placeholder.com/150"
								alt=""
								className="stock__image"
							/>
							<div className="stock__info">
								<div className="stock__title">
									BDay discount!
								</div>
								<div className="stock__laws">be good boy</div>
								<div className="stock__date">16.10.2021</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
