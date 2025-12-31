function GalleryItem({ id, colSpan, rowSpan, colStart, rowStart }) {
    const colSpanMap = {
        1: 'col-span-1',
        2: 'col-span-2',
        4: 'col-span-4'
    }

    const rowSpanMap = {
        1: 'row-span-1',
        2: 'row-span-2',
        3: 'row-span-3',
        4: 'row-span-4'
    }

    const colStartMap = {
        1: 'col-start-1',
        3: 'col-start-3',
        5: 'col-start-5',
        6: 'col-start-6',
        8: 'col-start-8',
        9: 'col-start-9',
        11: 'col-start-11'
    }

    const rowStartMap = {
        1: 'row-start-1',
        2: 'row-start-2',
        3: 'row-start-3',
        4: 'row-start-4',
        5: 'row-start-5',
        6: 'row-start-6',
        7: 'row-start-7',
        8: 'row-start-8'
    }

    return <div className={`${colSpanMap[colSpan]} ${rowSpanMap[rowSpan]} ${colStartMap[colStart]} ${rowStartMap[rowStart]} bg-neutral-400 rounded-lg flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer hover:scale-105`}></div>
}

export default GalleryItem;