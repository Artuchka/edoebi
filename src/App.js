import { Home } from "./components/Home.jsx"
import { Header } from "./components/Header.jsx"
import { Sticky } from "./components/Sticky.jsx"
import { Slider } from "./components/Slider.jsx"
import { Footer } from "./components/Footer.jsx"
import "./styles/styles.scss"
import { BrowserRouter, Route, Router, Routes } from "react-router-dom"

function App() {
	return (
		<div>
			<Header />
			<main className="main">
				<Sticky />
				<Slider />
			</main>
			<Footer />
		</div>
	)
}

export default App
