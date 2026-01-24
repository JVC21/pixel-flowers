import flowersData from '../data/data.json'

export function getFlowers() {
	const images = import.meta.glob('../data/img/*.jpg', { eager: true, query: '?url', import: 'default' });
	const result = flowersData.map(({ imageName, ...rest }) => ({
		imageUrl: imageName ? images[`../data/img/${imageName}`] : undefined,
		...rest
	}));
	return Promise.resolve(result);
}

export function getFlowerById(id) {
	const found = flowersData.find(flower => flower.id == id)

	if (!found) return Promise.resolve(null)

	const images = import.meta.glob('../data/img/*.jpg', { eager: true, query: '?url', import: 'default' })
	const { imageName, ...rest } = found

	return Promise.resolve({
		imageUrl: images[`../data/img/${imageName}`],
		...rest
	})
}