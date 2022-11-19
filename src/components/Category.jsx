import React from "react"
import { Item } from "./Item"

const sampleItem = {
	imgSrc: "https://static.prod-ybdyb.ru/cdn-cgi/image/width=124&height=92,quality=90/https://102922.selcdn.ru/nomenclature_images_test/1599275/5cf1e2fe-be4f-4619-aa31-abf4c6f2a2ef.jpg",
	price: 1660,
	weight: 132,
	name: "Чпо Ки123",
	starred: true,
}

export const Category = ({ title }) => {
	return (
		<section className="category">
			<h3 className="category__title">{title}</h3>
			<div className="category__items-grid">
				<Item {...sampleItem} />
				<Item {...sampleItem} />
				<Item {...sampleItem} />
				<Item {...sampleItem} />
			</div>
		</section>
	)
}
