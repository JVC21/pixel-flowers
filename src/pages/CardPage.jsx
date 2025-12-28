import Card from "../components/Card.jsx"
import { getFlowers } from "../data/data-service.js"

function CardPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-500">
			<Card flower={getFlowers()[0]} />
		</div>
    );
}

export default CardPage;