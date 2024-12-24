import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { IoClose } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';

const customStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
	},
	content: {
		padding: 0,
		border: '5px solid #fff',
		borderRadius: '10px',
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		minWidth: '290px',
		minHeight: '174px',
	},
};

const ImageModal = ({ isActive, onClose, image }) => {
	return (
		<Modal
			isOpen={isActive}
			onRequestClose={onClose}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			style={customStyles}
		>
			<img
				className={s.imageStyle}
				src={image.urls.regular}
				alt={image.description ?? image.alt_description}
			/>
			<div className={s.desc}>{image.description ?? image.alt_description}</div>
			<div className={s.likes}>
				<AiFillLike className={s.likesIcon} />
				<span className={s.infoValue}>{image.likes}</span>
			</div>
			<button className={s.close} onClick={onClose}><IoClose className={s.closeIcon} /></button>
		</Modal>
	);
}

export default ImageModal;
