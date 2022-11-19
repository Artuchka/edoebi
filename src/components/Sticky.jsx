import React from "react"

import cartImage from "./../img/cart.svg"

const categories = [
	"Рекомендуем",
	"Премиум",
	"Роллы и суши",
	"Темпура",
	"Запечённые",
	"Горячее и салаты",
	"Соусы",
	"Напитки и десерты",
	"Специи",
]

export const Sticky = ({ totalPrice }) => {
	return (
		<div className="sticky">
			<div className="category-list-wrapper">
				<ul className="category-list">
					{categories.map((catName, ind) => {
						return (
							<li className="category-list__item" key={ind}>
								{catName}
							</li>
						)
					})}
				</ul>
			</div>
			<div className="cart">
				<img src={cartImage} />
				Cart
				<span className="total-price">{totalPrice}</span>
			</div>
		</div>
	)
}
