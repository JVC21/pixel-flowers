
function GalleryButton({ className, children }) {
    return (
        // <button className={`${className} outfit-regular text-lg text-body bg-accent rounded-lg cursor-pointer shadow-lg transition-all duration-300 hover:scale-105`}>{children}</button>
        <button className={`${className} outfit-regular text-lg text-muted bg-accent rounded-lg cursor-pointer shadow-lg transition-all duration-300`}>{children}</button>
    )
}

export default GalleryButton