// import TestTailwind from "./components/TestTailwind"
import FlowerCard from "./components/FlowerCard.jsx"
import { getFlowers } from "./data/data-service.js"

function App() {
	return (
		<FlowerCard flower={getFlowers()[0]} />
	)
}

export default App