import { Link } from "react-router"

function GalleryItem({ flower, className }) {

    if (flower.imageUrl) 
    return <Link to={`/flowers/${flower.id}`} className={`${className} flex items-center justify-center bg-placeholder rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105`}>
        <img
            src={flower.imageUrl}
            alt={flower.common_name}
            className="rounded-lg size-full object-cover"
        />
    </Link>
    
    return <Link to={`/flowers/${flower.id}`} className={`${className} flex items-center justify-center bg-placeholder rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105`}>
        <i className="fa-solid fa-seedling text-muted text-5xl transition-all duration-300"></i>
    </Link>
}

export default GalleryItem