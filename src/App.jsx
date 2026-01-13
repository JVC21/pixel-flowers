import { Routes, Route } from "react-router"
import CardPage from "./pages/CardPage.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"

function App() {
	return (
		<Routes>
			<Route path="/" element={<GalleryPage />} />
			<Route path="/flower" element={<CardPage />} />
			{/* <Route path="/more" element={<MorePage />} /> */}
		</Routes>

	)
}

export default App