const images = import.meta.glob('../assets/*.jpg', { eager: true, query: '?url', import: 'default' });

function CardImage({ flower, isOpen, isPlaceholder = true }) {
    const imageUrl = images[`../assets/${isPlaceholder ? '480x480.jpg' : flower.image}`];

    return (
        <img src={imageUrl} alt={flower.common_name} className={`w-120 h-120 bg-neutral-400 shadow-lg z-30 ${isOpen ? 'rounded-l-xl' : 'rounded-xl'} transition-all duration-300`} />
    );
}

export default CardImage;