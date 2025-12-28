function CardTab({ isOpen, setIsOpen }) {
    return (
        <button onClick={() => setIsOpen(!isOpen)} className={`flex justify-end bg-neutral-600 rounded-xl w-50 h-fit shadow-lg cursor-pointer absolute z-10 ${isOpen ? 'translate-x-92' : 'translate-x-48'} transition-all duration-300`}>
			<i className="fa-solid fa-angle-right pt-1 text-2xl m-3 text-neutral-800"></i>
		</button>
    );
}

export default CardTab;