import React from "react";
import s from "./Footer.module.css"

const Footer: React.FC = () => {

	const currentYear = new Date().getFullYear();

	return (
		<div className={s.copyright}>Image Search | Built with React & TypeScript | {currentYear}</div>
	)
}

export default Footer
