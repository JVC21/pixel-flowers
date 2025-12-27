// import TestTailwind from "./components/TestTailwind"
import FlowerCard from "./components/FlowerCard.jsx"
import { getFlowers } from "./data/data-service.js"

function App() {
	return (
		<>
			<FlowerCard flower={getFlowers()[0]} />
			<FlowerCard flower={getFlowers()[1]} />
			<FlowerCard flower={getFlowers()[2]} />
			<FlowerCard flower={getFlowers()[3]} />
		</>
	)
}

export default App