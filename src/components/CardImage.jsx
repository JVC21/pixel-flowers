import clsx from "clsx"
import { twMerge } from "tailwind-merge"

function CardImage({ flower, isOpen, isPlaceholder = false }) {

    if (flower.imageUrl && !isPlaceholder) 
    return <img 
        src={flower.imageUrl}
        alt={flower.common_name}
        className={twMerge(clsx(
            // Base styles
            "bg-base rounded-xl shadow-lg z-30",
            // Minimal screens
            "size-80",
            isOpen && "rounded-none rounded-t-xl",
            // Medium screens
            "md:size-90",
            // Large screens
            "lg:size-105",
            isOpen && "lg:rounded-none lg:rounded-l-xl",
            // Extra large screens
            "xl:size-120",
            // Animation
            "transition-all duration-300"
        ))}
    />
    
    return <div
        className={twMerge(clsx(
            // Base styles
            "flex justify-center items-center bg-base rounded-xl shadow-lg z-30",
            // Minimal screens
            "size-80",
            isOpen && "rounded-none rounded-t-xl",
            // Medium screens
            "md:size-90",
            // Large screens
            "lg:size-105",
            isOpen && "lg:rounded-none lg:rounded-l-xl",
            // Extra large screens
            "xl:size-120",
            // Animation
            "transition-all duration-300"
        ))}
    >
        <i className="fa-solid fa-seedling text-xmuted text-7xl lg:text-8xl xl:text-9xl transition-all duration-300"></i>
    </div>
}

export default CardImage