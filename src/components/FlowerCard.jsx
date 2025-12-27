
import { useState } from "react";


const images = import.meta.glob('../assets/*.jpg', { eager: true, query: '?url', import: 'default' });

// Clase personalizada para delay solo en width
const widthDelayClass = `width-delay`;

function FlowerCard({ flower }) {
	const imageUrl = images[`../assets/${flower.image}`];

	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="flex items-center justify-center min-h-screen bg-neutral-500">
				<div className="flower-card flex items-center justify-center z-20">
					{/* <img src={imageUrl} alt={flower.common_name} className="flower-image w-120 h-120 relative rounded-l-xl shadow-lg z-30" /> */}
					<img src={'https://placehold.org/480x480/a1a1a1'} alt={flower.common_name} className={`flower-image w-120 h-120 shadow-lg z-30 ${open ? 'rounded-l-xl' : 'rounded-xl'} transition-all duration-300`} />
					<div
						className={`flower-info flex flex-col h-120 pt-14 pb-6 justify-between bg-neutral-300 rounded-r-xl shadow-lg overflow-hidden z-20 ${open ? 'w-80 px-10 translate-x-0' : 'w-0 px-0 -translate-x-20'} transition-all duration-300`}
					>
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
					<button onClick={() => setOpen(!open)} className={`flex justify-end bg-neutral-600 rounded-xl w-50 h-fit shadow-lg cursor-pointer absolute z-10 ${open ? 'translate-x-90' : 'translate-x-50'} transition-all duration-300`}>
						<i className="fa-solid fa-angle-right pt-1 text-2xl m-3 text-neutral-800"></i>
					</button>
				</div>
			</div>
		</>
	);
}

export default FlowerCard;