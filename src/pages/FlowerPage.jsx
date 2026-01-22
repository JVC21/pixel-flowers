import { useParams } from "react-router";
import Card from "../components/Card.jsx"
import { getFlowers } from "../data/data-service.js"

function FlowerPage() {
    const { id } = useParams();
    const flower = getFlowers().find(f => String(f.id) === id);

    if (!flower)
        return <div>Flower not found</div>;

    return (
        <div className="flex items-center justify-center min-h-screen min-w-screen bg-neutral-500">
			<Card flower={flower} />
		</div>
    );
}

export default FlowerPage;