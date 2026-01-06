import GalleryItem from "../components/GalleryItem";
import GalleryButton from "../components/GalleryButton.jsx";
import { getFlowers } from "../data/data-service.js"

function GalleryPage() {
    const flowersLength = 20;

    return (
        <div className="min-h-screen bg-neutral-300 px-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 p-6 gap-6">
                <div className="row-span-3 col-span-3 col-start-3 row-start-4 flex flex-col items-left justify-center z-20">
                    <h2 className="text-center text-8xl outfit-regular mb-2 text-neutral-700 transition-all duration-300 hover:scale-105 hover:text-neutral-900 hover:text-shadow-lg">Pixel Flowers</h2>
                    <p className="dm-mono-regular text-center text-neutral-800 transition-all duration-300 hover:scale-105">By Julio Viche</p>
                </div>

                
                <GalleryButton className="col-start-2">List</GalleryButton>
                <GalleryButton className="col-start-4">Reload</GalleryButton>
                <GalleryButton className="col-start-6">More</GalleryButton>

                {flowersLength>= 1 ? <GalleryItem className="col-start-1 row-start-1 row-span-2 aspect-square">1</GalleryItem> : null}
                {flowersLength>= 2 ? <GalleryItem className="col-start-3 row-start-1 row-span-2 aspect-square">2</GalleryItem> : null}
                {flowersLength>= 3 ? <GalleryItem className="col-start-5 row-start-1 row-span-2 aspect-square">3</GalleryItem> : null}
                {flowersLength>= 4 ? <GalleryItem className="col-start-7 row-start-1 row-span-2 aspect-square">4</GalleryItem> : null}
                {flowersLength>= 21 ? <GalleryItem className="col-start-4 row-start-8 row-span-2 aspect-square">21</GalleryItem> : null}
                
                {Array.from({ length: Math.min(16, flowersLength - 4) }).map((_, i) => (
                    <GalleryItem className="row-span-2 aspect-square" key={i}>{i + 5}</GalleryItem>
                ))}

                {Array.from({ length: Math.min(19, flowersLength - 21) }).map((_, i) => (
                    <GalleryItem className="row-span-2 aspect-square" key={i}>{i + 22}</GalleryItem>
                ))}

            </div>
        </div>
    );
}

export default GalleryPage;