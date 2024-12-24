import { Field, Form, Formik } from "formik"
import s from "./SearchBar.module.css"
import { CgSearch } from "react-icons/cg"
import toast, { Toaster } from "react-hot-toast";
import React, { useRef, useState } from "react";

interface SearchBarProps {
	changeQuery: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ changeQuery }) => {

	interface InitialValues {
		query: string;
	}

	const initialValues: InitialValues = {
		query: "",
	}

	const formRef = useRef<HTMLFormElement>(null);

	const [isActive, setIsActive] = useState<boolean>(false);

	const handleSubmit = (values: InitialValues): void => {
		if (values.query.trim() === "") {
			toast.error("You must enter text to search for images")
			return;
		}

		changeQuery(values.query);
	}

	const handleFocus = (): void => {
		setIsActive(true);
	};

	const handleBlur = (): void => {
		setIsActive(false);
	};

	return (
		<>
			<Formik<InitialValues> initialValues={initialValues} onSubmit={handleSubmit}>
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
		</>
	)
}

export default SearchBar
