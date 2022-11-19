import React from "react"
import { useRef } from "react"
import { Link, useLocation } from "react-router-dom"

export const Sugar = () => {
	const currentPath = useLocation()
	const sugarNameRef = useRef("")
	switch (currentPath.pathname) {
		case "/documents":
			sugarNameRef.current = "Документы"
			break
		case "/delivery":
			sugarNameRef.current = "Доставка"
			break
		case "/stocks":
			sugarNameRef.current = "Акции"
			break
		case "/invest":
			sugarNameRef.current = "Инвестиции"
			break
		case "/franchise":
			sugarNameRef.current = "Франшиза"
			break
		case "/":
			sugarNameRef.current = ""
			break
		default:
			sugarNameRef.current = ""
	}

	return (
		<div className="sugar">
			<Link to="/" className="inactive">
				<span>Главная</span>
			</Link>
			/
			<Link to="/delivery" className="active">
				<span>{sugarNameRef.current}</span>
			</Link>
		</div>
	)
}
