import { MainLayout } from "./layouts/MainLayout.jsx"
import "./styles/styles.scss"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home.jsx"
import { NotFoundPage } from "./pages/NotFoundPage.jsx"
import { Stocks } from "./pages/Stocks.jsx"

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/stocks" element={<Stocks />} />
					<Route path="*" element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
