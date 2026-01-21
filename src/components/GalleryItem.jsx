import { Link } from "react-router";

function GalleryItem({ flower, className }) {
    return <Link to={`/flowers/${flower.id}`} className={`${className} bg-neutral-400 rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-105`}></Link>
}

export default GalleryItem;