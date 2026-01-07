function GalleryItem({ flower, className }) {
    return <div className={`${className} bg-neutral-400 rounded-lg flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 hover:scale-105`}>{flower.id}</div>
}

export default GalleryItem;