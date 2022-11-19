import React from "react"

import { Header } from "./../components/Header.jsx"
import { Sticky } from "./../components/Sticky.jsx"
import { SliderComp } from "./../components/Slider.jsx"
import { Footer } from "./../components/Footer.jsx"
import { Sugar } from "./../components/Sugar.jsx"
import { Outlet, useLocation } from "react-router-dom"
import { useLayoutEffect } from "react"

export const MainLayout = () => {
	const location = useLocation()
	useLayoutEffect(() => {
		document.documentElement.scrollTo(0, 0)
	}, [location.pathname])

	return (
		<>
			<Header />
			<main className="main">
				<Sticky />
				<SliderComp />
				<Sugar />
				<Outlet />
			</main>

			<Footer />
		</>
	)
}
