import axios from "axios"
import React from "react"
import { useState } from "react"
import { Category } from "../components/Category.jsx"
import { ProgressBar } from "../components/ProgressBar.jsx"

const categorySample = {
	title: "Рекомендуем",
}
const apiurl = "https://6367caaed1d09a8fa61a9d57.mockapi.io/sushi"

const categorieIDs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const categoryName = [
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

export const Home = ({ cart, setCart }) => {
	const [items, setItems] = useState([])

	const [isLoading, setIsLoading] = useState(true)

	React.useEffect(() => {
		setIsLoading(true)
		categorieIDs.forEach((categoryId) => {
			const categoryParam = `?category=${categoryId}`
			axios
				.get(`${apiurl}`)
				.then(({ data }) => {
					setItems((prev) => {
						const newItems = { ...prev }
						newItems[`${categoryId}`] = data
						return newItems
					})
				})
				.catch((err) => {
					console.warn(err)
				})
				.finally(() => {
					setIsLoading(false)
				})
		})
	}, [])

	function addToCart({ price, name, imageUrl, weight, uuid }) {
		if (uuid in cart) {
			setCart((prev) => {
				const newCart = { ...prev }
				newCart[`${uuid}`] = {
					...prev[uuid],
					count: prev[uuid].count + 1,
				}
				return newCart
			})
		} else {
			setCart((prev) => {
				const newCart = { ...prev }
				newCart[`${uuid}`] = {
					price,
					name,
					imageUrl,
					weight,
					uuid,
					count: 1,
				}
				return newCart
			})
		}
		console.log(cart)
	}

	const categories = Object.keys(items).map((categoryId) => {
		const data = items[categoryId]
		return (
			<Category
				addToCart={addToCart}
				title={categoryName[categoryId]}
				key={categoryId}
				items={data}
			/>
		)
	})
	return (
		<>
			<ProgressBar />
			{isLoading ? <h1>is loading</h1> : categories}
		</>
	)
}
