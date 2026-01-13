import { Routes, Route } from "react-router"
import FlowerPage from "./pages/FlowerPage.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"

function App() {
	return (
		<Routes>
			<Route path="/" element={<GalleryPage />} />
			<Route path="/flowers/:id" element={<FlowerPage />} />
			{/* <Route path="/more" element={<MorePage />} /> */}
		</Routes>

	)
}

export default App