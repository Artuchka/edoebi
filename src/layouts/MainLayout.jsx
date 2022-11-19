import React from "react"

import { Header } from "./../components/Header.jsx"
import { Sticky } from "./../components/Sticky.jsx"
import { Slider } from "./../components/Slider.jsx"
import { Footer } from "./../components/Footer.jsx"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
	return (
		<>
			<Header />
			<main className="main">
				<Sticky />
				<Slider />
				<Outlet />
			</main>

			<Footer />
		</>
	)
}
