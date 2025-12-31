import GalleryItem from "../components/GalleryItem";

function GalleryPage() {
    return (
        <div className="grid grid-cols-12 grid-rows-8 gap-4 p-4 bg-neutral-200 min-h-screen">
            <GalleryItem id={1} colSpan={4} rowSpan={4} colStart={5} rowStart={3} />
            <GalleryItem id={2} colSpan={2} rowSpan={3} colStart={3} rowStart={1} />
            <GalleryItem id={3} colSpan={2} rowSpan={3} colStart={9} rowStart={1} />
            <GalleryItem id={4} colSpan={2} rowSpan={3} colStart={3} rowStart={6} />
            <GalleryItem id={5} colSpan={2} rowSpan={3} colStart={9} rowStart={6} />
            <GalleryItem id={6} colSpan={2} rowSpan={2} colStart={6} rowStart={1} />
            <GalleryItem id={7} colSpan={2} rowSpan={2} colStart={6} rowStart={7} />
            <GalleryItem id={8} colSpan={2} rowSpan={2} colStart={3} rowStart={4} />
            <GalleryItem id={9} colSpan={2} rowSpan={2} colStart={9} rowStart={4} />
            <GalleryItem id={10} colSpan={2} rowSpan={2} colStart={1} rowStart={3} />
            <GalleryItem id={11} colSpan={2} rowSpan={2} colStart={11} rowStart={3} />
            <GalleryItem id={12} colSpan={2} rowSpan={2} colStart={1} rowStart={5} />
            <GalleryItem id={13} colSpan={2} rowSpan={2} colStart={11} rowStart={5} />
            <GalleryItem id={14} colSpan={2} rowSpan={2} colStart={1} rowStart={1} />
            <GalleryItem id={15} colSpan={2} rowSpan={2} colStart={11} rowStart={1} />
            <GalleryItem id={16} colSpan={2} rowSpan={2} colStart={1} rowStart={7} />
            <GalleryItem id={17} colSpan={2} rowSpan={2} colStart={11} rowStart={7} />
            <GalleryItem id={18} colSpan={1} rowSpan={1} colStart={5} rowStart={2} />
            <GalleryItem id={19} colSpan={1} rowSpan={1} colStart={8} rowStart={2} />
            <GalleryItem id={20} colSpan={1} rowSpan={1} colStart={5} rowStart={7} />
            <GalleryItem id={21} colSpan={1} rowSpan={1} colStart={8} rowStart={7} />
            <GalleryItem id={18} colSpan={1} rowSpan={1} colStart={5} rowStart={1} />
            <GalleryItem id={19} colSpan={1} rowSpan={1} colStart={8} rowStart={1} />
            <GalleryItem id={20} colSpan={1} rowSpan={1} colStart={5} rowStart={8} />
            <GalleryItem id={21} colSpan={1} rowSpan={1} colStart={8} rowStart={8} />
		</div>
    );
}

export default GalleryPage;