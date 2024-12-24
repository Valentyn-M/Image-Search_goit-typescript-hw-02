import { useEffect, useState } from 'react'
import './App.css'
import ImageGallery from '.././ImageGallery/ImageGallery'
import SearchBar from '.././SearchBar/SearchBar'
import { fetchImages } from '../../services/api'
import Loader from '.././Loader/Loader'
import ErrorMessage from '.././ErrorMessage/ErrorMessage'
import LoadMoreBtn from '.././LoadMoreBtn/LoadMoreBtn'
import ImageModal from '.././ImageModal/ImageModal'
import { Image } from './App.types'
import Footer from '../Footer/Footer'

const App: React.FC = () => {

	const [images, setImages] = useState<Image[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [isError, setIsError] = useState<boolean>(false);
	const [query, setQuery] = useState<string>('');
	const [page, setPage] = useState<number>(1);
	const [totalPages, setTotalPages] = useState<number>(0);
	const [isModal, setIsModal] = useState<boolean>(false);
	const [selectedImage, setSelectedImage] = useState<null | Image>(null);

	useEffect(() => {
		if (!query) return;
		const getData = async () => {
			try {
				setIsError(false);
				setLoading(true);
				const { results, total_pages } = await fetchImages(query, page);
				setImages(prev => [...prev, ...results]);
				setTotalPages(total_pages);
			} catch (error) {
				// Перевіряємо, чи є error екземпляром класу Error
				if (error instanceof Error) {
					setIsError(true);
					console.error(error.message); // Тепер TypeScript впевнений, що error має властивість message
					// console.error((error as Error).message); // Альтернативний варіант, якщо ми точно знаємо, що всі помилки, що викидаються, будуть екземплярами Error
				} else {
					console.error('Unknown error occurred'); // На випадок, якщо error не є екземпляром Error
				}
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, [query, page]);

	const changeQuery = (searchQuery: string): void => {
		setImages([]);
		setQuery(searchQuery);
		setPage(1);
	}

	const changePage = () => {
		setPage(prev => prev + 1);
	}

	const activateModal = (image: Image): void => {
		if (!isModal) {
			setSelectedImage(image);
			setIsModal(true);
		}
	}

	const closeModal = (): void => {
		setIsModal(false);
		setSelectedImage(null);
	};

	return (
		<>
			<header className="header">
				<SearchBar changeQuery={changeQuery} />
			</header>
			<main className="main">
				{images.length > 0 && <ImageGallery images={images} activateModal={activateModal} />}
				{loading && <Loader />}
				{isError && <ErrorMessage />}
				{!loading && totalPages > page && <LoadMoreBtn changePage={changePage} />}
			</main>
			{selectedImage && <ImageModal isActive={isModal} image={selectedImage} onClose={closeModal} />}
			<footer className="footer">
				<Footer />
			</footer>
		</>
	)
}

export default App
