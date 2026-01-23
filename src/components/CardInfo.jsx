import clsx from "clsx"
import { twMerge } from "tailwind-merge"

function CardInfo({ flower, isOpen }) {
    return (
        <div
            className={twMerge(clsx(
                // Base styles
                "flex flex-col justify-between overflow-hidden bg-base shadow-lg z-20",
                // Minimal screens
                "w-80 h-0 px-8 py-0 opacity-0 rounded-b-xl -translate-y-20",
                isOpen && "h-70 pt-10 pb-6 opacity-100 translate-y-0",
                // Medium screens
                "md:w-90",
                // Large screens
                "lg:w-0 lg:h-105 lg:px-0 lg:pt-10 lg:pb-6 lg:rounded-none lg:rounded-r-xl lg:-translate-x-20 lg:translate-y-0",
                isOpen && "lg:w-70 lg:px-8 lg:translate-x-0",
                // Extra large screens
                "xl:h-120 xl:px-0 xl:pt-14",
                isOpen && "xl:w-80 xl:px-10",
                // Animation
                "transition-all duration-300"
            ))}
        >
            <div className="lg:min-w-54 xl:min-w-60">
                <h2 className="cal-sans-regular text-body text-4xl tracking-wide mb-2">{flower.common_name}</h2>
                <p className="outfit-regular-italic text-muted text-sm mb-6 xl:mb-8">{flower.scientific_name}</p>
                <p className="outfit-regular text-body text-justify">{flower.description}</p>
            </div>
            <div>
                <p className="dm-mono-medium-italic text-strong text-xs text-right">{flower.date_added}</p>
                {/* <p className="outfit-bold text-strong mb-2">{flower.rating}</p> */}
            </div>
        </div>
    )
}

export default CardInfo