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

	// Стан для зберігання зображень
	const [images, setImages] = useState<Image[]>([]);
	// Стан для індикатора завантаження
	const [loading, setLoading] = useState<boolean>(false);
	// Стан для зберігання помилки
	const [isError, setIsError] = useState<boolean>(false);
	// Стан для зберігання пошукового запиту
	const [query, setQuery] = useState<string>('');
	// Стан для зберігання поточної сторінки галереї
	const [page, setPage] = useState<number>(1);
	// Стан для зберігання загальної кількості сторінок, що повертає бекенд
	const [totalPages, setTotalPages] = useState<number>(0);
	// Стан для зберігання стану модального вiкна
	const [isModal, setIsModal] = useState<boolean>(false);
	// Стан для зберігання зображення, по якому зроблено клiк
	const [selectedImage, setSelectedImage] = useState<null | Image>(null);

	// Еффект для HTTP-запитів на бекенд (useEffect спрацювує тільки після того, як відрендериться HTML-розмітка (DOM), на відміну від useState)
	useEffect(() => {
		// При завантаженнi стронiнки не запускаємо useEffect, тобто перевіряємо query (там пусто)
		if (!query) return;
		// Оголошуємо асинхронну функцію та одразу викликаємо її після оголошення, тому що колбек-функція, яку ми передаємо useEffect, не може бути асинхронною
		const getData = async () => {
			try {
				// Встановлюємо початкові значення перед запитом
				setIsError(false);
				setLoading(true);
				// Виконуємо HTTP-запит (отриману відповідь зберігаємо не в змінній, а одразу деструктуризуємо, отримуючи необхідні властивості об'єкта-відповіді)
				const { results, total_pages } = await fetchImages(query, page);
				// Записуємо дані в стан (додаємо до попередніх даних, розсипаємо масив)
				setImages(prev => [...prev, ...results]);
				// Записуємо в стан totalPages дані проклькіість торінок, що надійшли з бекенду
				setTotalPages(total_pages);
			} catch (error) {
				// Якщо отримуємо помилку
				// Перевіряємо, чи є error екземпляром класу Error
				if (error instanceof Error) {
					setIsError(true);
					console.error(error.message); // Тепер TypeScript впевнений, що error має властивість message
					// console.error((error as Error).message); // Альтернативний варіант, якщо ми точно знаємо, що всі помилки, що викидаються, будуть екземплярами Error
				} else {
					console.error('Unknown error occurred'); // На випадок, якщо error не є екземпляром Error
				}
			} finally {
				// Прибираємо Loader
				setLoading(false);
			}
		};
		getData();
		// Слідкуємо за зміною стану query (тобто, при зміні пошукового запиту запускається знову useEffect)
		// Слідкуємо за зміною стану page (тобто, при клыку по кнопці Load more запускається знову useEffect)
	}, [query, page]);

	// Функція для зміни стану пошукового запиту (при її запуску в компоненті SearchBar дані потрапляють у стан query)
	const changeQuery = (searchQuery: string): void => {
		// Обнуляємо стан images
		setImages([]);
		// Змінюємо стан query
		setQuery(searchQuery);
		// Обнуляємо стан page
		setPage(1);
	}

	// Функція для зміни стану поточної сторінки
	const changePage = () => {
		setPage(prev => prev + 1);
	}

	// Функція для активації модального вікна
	const activateModal = (image: Image): void => {
		// Перевіряємо, чи вже відкрито модальне вікно
		if (!isModal) {
			// Зберігаємо в стан обране зображення
			setSelectedImage(image);
			// Активуємо модальне вікно
			setIsModal(true);
		}
	}

	// Функція для деактивації модального вікна
	const closeModal = (): void => {
		setIsModal(false);
		setSelectedImage(null);
	};

	return (
		<>
			<header className="header">
				<SearchBar changeQuery={changeQuery} />
			</header>
			{/* Відображаємо галерею зображень у випадку, якщо у масиві images є хоча б один елемент */}
			<main className="main">
				{images.length > 0 && <ImageGallery images={images} activateModal={activateModal} />}
				{loading && <Loader />}
				{isError && <ErrorMessage />}
				{/* Показуємо кнопку якщо завантаження завершено i загальна кількість сторінок більше ніж поточна торінка */}
				{!loading && totalPages > page && <LoadMoreBtn changePage={changePage} />}
			</main>
			{/* Показуємо модальне вiкно за умови що selectedImage визначено */}
			{selectedImage && <ImageModal isActive={isModal} image={selectedImage} onClose={closeModal} />}
			<footer className="footer">
				<Footer />
			</footer>
		</>
	)
}

export default App
