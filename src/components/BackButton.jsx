import { useNavigate } from "react-router"

function BackButton() {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(-1)}
            className="group absolute top-4 lg:top-5 xl:top-6 -left-10 flex items-center justify-end w-24 h-fit bg-tab rounded-xl shadow-lg cursor-pointer transition-all duration-300 hover:-left-6"
        >
            <i className="fa-solid fa-angles-left text-body text-2xl pt-1 pb-0.5 pr-1 m-3"></i>
            <span className="absolute left-full ml-2 px-2 py-1 rounded bg-canvas dm-mono-light text-emphasis text-xs opacity-0 group-hover:opacity-100 transition-opacity group-hover:delay-600 duration-200 pointer-events-none">
                Back
            </span>
        </button>
    )
}

export default BackButton