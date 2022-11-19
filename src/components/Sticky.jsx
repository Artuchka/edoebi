import React from "react"
import { useState } from "react"

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

export const Sticky = ({ totalPrice, cartItems }) => {
	const [openCart, setOpenCart] = useState(true)
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
			<div className="cart" onClick={() => setOpenCart(true)}>
				<img src={cartImage} />
				Cart
				<span className="total-price">{totalPrice}</span>
			</div>
			{openCart && (
				<div className="cart-window">
					{Object.values(cartItems).map((item) => {
						return <h1>{item.name}</h1>
					})}
					<div className="close" onClick={() => setOpenCart(false)}>
						&times;
					</div>
				</div>
			)}
		</div>
	)
}
