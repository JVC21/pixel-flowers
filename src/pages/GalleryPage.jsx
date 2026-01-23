import GalleryItem from "../components/GalleryItem"
import GalleryButton from "../components/GalleryButton.jsx"
import { getFlowers } from "../data/data-service.js"

function GalleryPage() {
    const flowersLength = getFlowers().length

    return (
        <div className="flex items-center justify-center min-h-screen px-0 lg:px-16">
            <div className="mx-auto inline-grid grid-flow-dense grid-cols-3 p-4 gap-4 transition-all duration-300 lg:grid-cols-5 lg:p-5 lg:gap-5 xl:p-6 xl:gap-6 xl:grid-cols-7">
                <div className="row-span-3 col-span-3 col-start-1 row-start-4 flex flex-col items-left justify-center z-20 lg:col-start-2 xl:col-start-3">
                    <h1 className="text-center text-8xl outfit-regular mb-2 text-body transition-all duration-300 hover:scale-105 hover:text-emphasis hover:text-shadow-lg">Pixel Flowers</h1>
                    <p className="dm-mono-regular text-center text-strong transition-all duration-300 hover:scale-105">By Julio Viche</p>
                </div>
                
                <GalleryButton className="col-start-1 row-span-2 aspect-square max-w-48 lg:col-start-1 lg:row-span-1 lg:aspect-7/3 xl:col-start-2">List</GalleryButton>
                <GalleryButton className="col-start-2 aspect-7/3 max-w-48 lg:col-start-3 xl:col-start-4">Reload</GalleryButton>
                <GalleryButton className="col-start-3 row-span-2 aspect-square max-w-48 lg:col-start-5 lg:row-span-1 lg:aspect-7/3 xl:col-start-6">More</GalleryButton>

                <div className="col-start-2 row-start-7 aspect-7/3 lg:col-start-3 xl:col-start-4"></div>

                {getFlowers().map((flower, i) => (
                    <GalleryItem flower={flower} className="row-span-2 aspect-square max-w-48" key={i} />
                ))}
            </div>
        </div>
    )
}

export default GalleryPage