import { Image } from "../App/App.types";
import s from "./ImageCard.module.css"

interface ImageCardProps {
	image: Image;
	activateModal: (image: Image) => void
}

const ImageCard: React.FC<ImageCardProps> = ({ image, activateModal }) => {

	return (
		<button type="button" onClick={() => activateModal(image)} className={s.imgWrap}>
			<img
				className={s.image}
				src={image.urls.small}
				alt={image.description ?? image.alt_description}
				width="300"
				height="200"
				loading="lazy" />
		</button>
	)
}

export default ImageCard
