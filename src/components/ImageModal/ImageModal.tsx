import Modal from 'react-modal';
import s from './ImageModal.module.css';
import { IoClose } from 'react-icons/io5';
import { AiFillLike } from 'react-icons/ai';
import { Image } from '../App/App.types';
import React from 'react';

const customStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.8)',
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
	},
};

interface ImageModalProps {
	isActive: boolean;
	onClose: () => void;
	image: Image;
}

const ImageModal: React.FC<ImageModalProps> = ({ isActive, onClose, image }) => {
	return (
		<Modal
			isOpen={isActive}
			onRequestClose={onClose}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			style={customStyles}
			onAfterClose={() => { document.body.classList.remove('ReactModal__Body--open') }} // Через суворий режим цей клас чомусь не видаляється
		>
			<img
				className={s.imageStyle}
				src={image.urls.regular}
				alt={image.description ?? image.alt_description}
			/>
			<div className={s.desc}>{image.description ?? image.alt_description}</div>
			<div className={s.likes}>
				<AiFillLike className={s.likesIcon} />
				<span className={s.infoValue}>{image.likes ?? 0}</span>
			</div>
			<button className={s.close} onClick={onClose}><IoClose className={s.closeIcon} /></button>
		</Modal>
	);
}

export default ImageModal;
