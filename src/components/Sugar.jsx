import React from "react"
import { useRef } from "react"
import { Link, useLocation } from "react-router-dom"

const locationTranslation = {
	"/": "",
	"/documents": "Документы",
	"/delivery": "Доставка",
	"/stocks": "Акции",
	"/invest": "Инвестиции",
	"/franchise": "Франшиза",
	"/about": "О компании",
	"/documents": "Документы",
}

export const Sugar = () => {
	const currentPath = useLocation()
	const sugarNameRef = useRef("")
	sugarNameRef.current = locationTranslation[currentPath.pathname]

	return (
		<div className="sugar">
			<Link to="/" className="inactive">
				<span>Главная</span>
			</Link>
			{sugarNameRef.current !== "" ? "/" : null}
			<Link to="/delivery" className="active">
				<span>{sugarNameRef.current}</span>
			</Link>
		</div>
	)
}
