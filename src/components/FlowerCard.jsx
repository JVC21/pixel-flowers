function FlowerCard({ flower }) {
return (
	<div className="flower-card">
		<img src={flower.image} alt={flower.name} className="flower-image" />
		<div>
			<h2 className="flower-name">{flower.common_name}</h2>
			<p className="flower-description">{flower.scientific_name}</p>
		</div>
	</div>
);
}

export default FlowerCard;