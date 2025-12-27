const images = import.meta.glob('../assets/*.jpg', { eager: true, query: '?url', import: 'default' });

function FlowerCard({ flower }) {
	const imageUrl = images[`../assets/${flower.image}`];
	return (
		<div className="flex items-center justify-center min-h-screen bg-neutral-500">
			<div className="flower-card flex flex-row bg-neutral-300 rounded-lg shadow-lg">
				{/* <img src={imageUrl} alt={flower.common_name} className="flower-image rounded-l-lg w-100 h-100 bg-gray-400" /> */}
				<img src={'https://placehold.org/480x480/a1a1a1'} alt={flower.common_name} className="flower-image rounded-l-lg w-120 h-120" />
				<div className="flower-info flex flex-col max-w-74 px-10 pt-10 py-6 text-justify justify-between">
					<div>
						<h2 className="flower-common-name cal-sans-regular tracking-wide text-neutral-700 text-4xl mb-4">{flower.common_name}</h2>
						<p className="flower-scientific-name outfit-italic-regular text-neutral-500 text-sm mb-8">{flower.scientific_name}</p>
						<p className="flower-description outfit-regular text-neutral-700">{flower.description}</p>
					</div>
					<div>
						<p className="flower-date-added outfit-italic-bold text-neutral-800 text-right mb-2">
							{flower.date_added}
						</p>
						{/* <p className="flower-rating outfit-bold text-neutral-800 mb-2">{flower.rating}</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlowerCard;