import ImageCard from "../ImageCard/ImageCard"
import s from "./ImageGallery.module.css"

const ImageGallery = ({ images, activateModal }) => {

	const handleClick = (image) => {
		activateModal(image);
	}

	return (
		<ul className={s.gallery}>
			{images.map(image => (
				// Використовуємо стрілочну функцію для виклику функції handleClick, щоб вона не викликалася відразу, а передавалася як функція
				<li key={image.id} className={s.item} onClick={() => handleClick(image)}>
					<ImageCard data={image} />
				</li>
			))}
		</ul>

	)
}

export default ImageGallery
