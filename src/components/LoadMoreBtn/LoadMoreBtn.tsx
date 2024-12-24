import React, { MouseEvent } from "react";
import s from "./LoadMoreBtn.module.css"

interface LoadMoreBtnProps {
	changePage: () => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ changePage }) => {

	const handleClick = (evt: MouseEvent<HTMLButtonElement>) => {
		changePage();

		// Remove focus from the button
		evt.currentTarget.blur();
	}

	return (
		<button className={s.btn} type="button" onClick={handleClick}>Load more</button>
	)
}

export default LoadMoreBtn
