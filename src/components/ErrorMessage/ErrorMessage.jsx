import s from "./ErrorMessage.module.css"

const ErrorMessage = () => {
	return (
		<div className={s.errorWrap}>
			<p className={s.error}>Something went wrong. Please reload the page and try again.</p>
		</div>
	)
}

export default ErrorMessage
