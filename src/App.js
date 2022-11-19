import "./styles/styles.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { MainLayout } from "./layouts/MainLayout.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { NotFoundPage } from "./pages/NotFoundPage.jsx"
import { Stocks } from "./pages/Stocks.jsx"
import { DeliveryMap } from "./pages/DeliveryMap.jsx"
import { Documents } from "./pages/Documents.jsx"
import { About } from "./pages/About.jsx"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/stocks" element={<Stocks />} />
					<Route path="/delivery" element={<DeliveryMap />} />
					<Route path="/documents" element={<Documents />} />
					<Route path="/about" element={<About />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
