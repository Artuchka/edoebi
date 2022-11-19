import React from "react"
import { Category } from "../components/Category.jsx"
import { ProgressBar } from "../components/ProgressBar.jsx"

const categorySample = {
	title: "Рекомендуем",
}

export const Home = () => {
	return (
		<>
			<ProgressBar />
			<Category {...categorySample} />
		</>
	)
}
