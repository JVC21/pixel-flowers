import { Link } from "react-router"

function GalleryItem({ flower, className }) {
    return <Link to={`/flowers/${flower.id}`} className={`${className} flex items-center justify-center bg-placeholder rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105`}></Link>
}

export default GalleryItem