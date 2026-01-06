import GalleryItem from "../components/GalleryItem";

function GalleryPage() {
    return (
        <div className="min-h-screen bg-neutral-300">
            <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-7 p-6 gap-6">
                <div className="row-span-3 col-span-3 col-start-3 row-start-4 flex flex-col items-left justify-center z-20">
                    <h2 className="text-center text-8xl outfit-regular mb-2 text-neutral-700 transition-all duration-300 hover:scale-105 hover:text-neutral-900 hover:text-shadow-lg">Pixel Flowers</h2>
                    <p className="dm-mono-regular text-center text-neutral-800 transition-all duration-300 hover:scale-105">By Julio Viche</p>
                </div>

                <button className="col-start-2 aspect-7/3">Button 1</button>
                <button className="col-start-4 aspect-7/3">Button 2</button>
                <button className="col-start-6 aspect-7/3">Button 3</button   >

                <GalleryItem className="col-start-1 row-start-1 row-span-2 aspect-square">1</GalleryItem>
                <GalleryItem className="col-start-3 row-start-1 row-span-2 aspect-square">2</GalleryItem>
                <GalleryItem className="col-start-5 row-start-1 row-span-2 aspect-square">3</GalleryItem>
                <GalleryItem className="col-start-7 row-start-1 row-span-2 aspect-square">4</GalleryItem>
                
                {Array.from({ length: 16 }).map((_, i) => (
                    <GalleryItem className="row-span-2 aspect-square" key={i}>{i + 5}</GalleryItem>
                ))}

                <GalleryItem className="col-start-4 row-start-8 row-span-2 aspect-square">21</GalleryItem>

                {Array.from({ length: 19 }).map((_, i) => (
                    <GalleryItem className="row-span-2 aspect-square" key={i}>{i + 22}</GalleryItem>
                ))}
            </div>
        </div>
    );
}

export default GalleryPage;