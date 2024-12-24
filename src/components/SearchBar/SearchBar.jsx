import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"
import { CgSearch } from "react-icons/cg"
import toast, { Toaster } from "react-hot-toast";
import { useRef, useState } from "react";

const SearchBar = ({ onChangeQuery }) => {

	const initialValues = {
		query: "",
	}

	const formRef = useRef();
	// Стан для активації класу
	const [isActive, setIsActive] = useState(false);

	const handleSubmit = (values) => {
		// Якщо текстове поле порожнє
		if (values.query === "") {
			// Бібліотека React Hot Toast
			toast.error("You must enter text to search for images")
			return;
		}

		onChangeQuery(values.query);
	}

	// Активацiя форми
	const handleFocus = () => {
		setIsActive(true);
	};

	const handleBlur = () => {
		setIsActive(false);
	};

	return (
		<header className={s.header}>
			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				<Form className={`${s.form} ${isActive ? s.isActive : ""}`} ref={formRef}>
					<Field className={s.input}
						name="query"
						type="text"
						autoComplete="off"
						autoFocus
						placeholder="Search images and photos"
						onFocus={handleFocus}
						onBlur={handleBlur}
					>
					</Field>
					<button className={s.btn} type="submit" aria-label="Search"><CgSearch className={s.icon} /></button>
				</Form>
			</Formik>
			<Toaster position="top-right" />
		</header>
	)
}

export default SearchBar
