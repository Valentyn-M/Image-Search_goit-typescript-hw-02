import React from "react"
import s from "./ErrorMessage.module.css"

const ErrorMessage: React.FC = () => {
	return (
		<div className={s.errorWrap}>
			<p className={s.error}>Something went wrong. Please reload the page and try again.</p>
		</div>
	)
}

export default ErrorMessage
