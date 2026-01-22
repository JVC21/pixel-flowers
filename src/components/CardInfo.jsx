import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function CardInfo({ flower, isOpen }) {
    return (
        <div
            className={twMerge(clsx(
                // Base styles
                "flex flex-col justify-between overflow-hidden bg-neutral-300 z-20 shadow-lg",
                // Minimal screens
                "w-80 h-0 px-8 py-0 rounded-b-xl -translate-y-20 opacity-0",
                isOpen && "h-70 pt-10 pb-6 translate-y-0 opacity-100",
                // Medium screens
                "md:w-90",
                // Large screens
                "lg:w-0 lg:h-105 lg:px-0 lg:pt-10 lg:pb-6 lg:rounded-none lg:rounded-r-xl lg:-translate-x-20 lg:translate-y-0",
                isOpen && "lg:w-70 lg:px-8 lg:translate-x-0",
                // Extra large screens
                "xl:h-120 xl:px-10 xl:pt-14",
                isOpen && "xl:w-80",
                // Animation
                "transition-all duration-300"
            ))}
        >
            <div className="">
                <h2 className="flower-common-name cal-sans-regular tracking-wide text-neutral-700 text-4xl mb-2">{flower.common_name}</h2>
                <p className="flower-scientific-name outfit-regular-italic text-neutral-500 text-sm mb-6 xl:mb-8">{flower.scientific_name}</p>
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