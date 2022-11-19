import React from "react"

export const Sticky = () => {
	return (
		<div className="sticky">
			<div className="category-list-wrapper">
				<ul className="category-list">
					<li className="category-list__item special">Рекомендуем</li>
					<li className="category-list__item">Наборы</li>
					<li className="category-list__item">Премиум</li>
					<li className="category-list__item">Роллы и суши</li>
					<li className="category-list__item">Темпура</li>
					<li className="category-list__item">Запечённые</li>
					<li className="category-list__item">Горячее и салаты</li>
					<li className="category-list__item">Соусы</li>
					<li className="category-list__item">Напитки и десерты</li>
					<li className="category-list__item">Специи</li>
				</ul>
			</div>
			<div className="cart">
				<img src="./img/cart.svg" />
				Cart
				<span className="total-price">0</span>
			</div>
		</div>
	)
}
