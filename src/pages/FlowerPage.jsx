import { useParams } from "react-router";
import { getFlowers } from "../data/data-service.js"
import Card from "../components/Card.jsx"
import NotFound from "../components/NotFound.jsx";

function FlowerPage() {
    const { id } = useParams();
    const flower = getFlowers().find(f => String(f.id) === id);

    if (!flower)
        return <NotFound title="Flower Not Found" message="The flower you are looking for does not exist." icon={
            <i className="fa-solid fa-seedling text-neutral-400"></i>
        } />;

    return (
        <div className="flex items-center justify-center min-h-screen min-w-screen bg-neutral-500 to-transparent">
            <Card flower={flower} />
        </div>
    );
}

export default FlowerPage;