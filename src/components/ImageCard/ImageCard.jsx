import s from "./ImageCard.module.css"

const ImageCard = ({ data }) => {

	return (
		<div className={s.imgWrap} tabIndex="0">
			<img className={s.image} src={data.urls.small} alt={data.description ?? data.alt_description} width="300" height="200" loading="lazy" />
		</div>
	)
}

export default ImageCard
