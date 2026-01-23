import clsx from "clsx"
import { twMerge } from "tailwind-merge"

function CardTab({ isOpen, setIsOpen }) {
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={twMerge(clsx(
                // size: 18
                // Base styles
                "absolute flex flex-col justify-end bg-tab rounded-xl shadow-lg cursor-pointer z-10",
                // Minimal screens
                "h-50 translate-y-28",
                isOpen && "translate-y-65",
                // Medium screens
                "md:translate-y-33",
                isOpen && "md:translate-y-70",
                // Large screens
                "lg:flex-row lg:h-fit lg:w-50 lg:translate-x-40 lg:translate-y-0",
                isOpen && "lg:translate-x-78",
                // Extra large screens
                "xl:translate-x-48",
                isOpen && "xl:translate-x-92",
                // Animation
                "transition-all duration-300"
            ))}
        >
			<i className="fa-solid fa-angle-down text-body lg:-rotate-90 text-2xl pt-1 pb-0.5 m-3"></i>
		</button>
    )
}

export default CardTab