import { useParams } from "react-router";
import Card from "../components/Card.jsx"
import { getFlowers } from "../data/data-service.js"

function FlowerPage() {
    const { id } = useParams();
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-500">
			<Card flower={getFlowers()[id]} />
		</div>
    );
}

export default FlowerPage;