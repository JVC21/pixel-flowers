import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const images = import.meta.glob('../assets/*.jpg', { eager: true, query: '?url', import: 'default' })

function CardImage({ flower, isOpen, isPlaceholder = true }) {
    const imageUrl = images[`../assets/${isPlaceholder ? '480x480.jpg' : flower.image}`]

    return (
        <img
            src={imageUrl}
            alt={flower.common_name}
            className={twMerge(clsx(
                // Base styles
                "bg-placeholder rounded-xl shadow-lg z-30",
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
    )
}

export default CardImage