function CardInfo({ flower, isOpen }) {
    return (
        <div className={`flex flex-col h-120 pt-14 pb-6 justify-between bg-neutral-300 rounded-r-xl shadow-lg overflow-hidden z-20 ${isOpen ? 'w-80 px-10 translate-x-0' : 'w-0 px-0 -translate-x-20'} transition-all duration-300`}>
            <div className="w-60">
                <h2 className="flower-common-name cal-sans-regular tracking-wide text-neutral-700 text-4xl mb-2">{flower.common_name}</h2>
                <p className="flower-scientific-name outfit-regular-italic text-neutral-500 text-sm mb-8">{flower.scientific_name}</p>
                <p className="flower-description outfit-regular text-neutral-700 text-justify">{flower.description}</p>
            </div>
            <div>
                <p className="flower-date-added dm-mono-medium-italic text-neutral-800 text-xs text-right">{flower.date_added}</p>
                {/* <p className="flower-rating outfit-bold text-neutral-800 mb-2">{flower.rating}</p> */}
            </div>
        </div>
    );
}

export default CardInfo;