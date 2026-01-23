import { useParams } from "react-router"
import { useFlower } from "../hooks/useFlower.js"
import Card from "../components/Card.jsx"
import BackButton from "../components/BackButton.jsx"
import NotFound from "../components/NotFound.jsx"

function FlowerPage() {
    const { id } = useParams()
    const flower = useFlower(id)

    if (!flower)
        return <NotFound title="Flower Not Found" message="The flower you are looking for does not exist." icon={
            <i className="fa-solid fa-seedling"></i>
        } />

    return (
        <div className="flex items-center justify-center bg-canvas min-h-screen min-w-screen to-transparent">
            <BackButton />
            <Card flower={flower} />
        </div>
    )
}

export default FlowerPage