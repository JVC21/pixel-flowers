import { Routes, Route } from "react-router"
import FlowerPage from "./pages/FlowerPage.jsx"
import GalleryPage from "./pages/GalleryPage.jsx"
import NotFound from "./components/NotFound.jsx"

function App() {
	return (
		<Routes>
			<Route path="/" element={<GalleryPage />} />
			<Route path="/flowers/:id" element={<FlowerPage />} />
			<Route path="*" element={
				<NotFound 
				title="Page Not Found" 
				message="The page you are looking for does not exist." 
				icon={
					<i className="fa-solid fa-exclamation text-neutral-400"></i>
				} 
				/>
			} />
			{/* <Route path="/more" element={<MorePage />} /> */}
		</Routes>
	)
}

export default App