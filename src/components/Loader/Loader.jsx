import { ThreeDots } from "react-loader-spinner"
import s from "./Loader.module.css"

const Loader = () => {
	return (
		<div className={s.loader}>
			<ThreeDots
				visible={true}
				height="20"
				width="80"
				color="#ff0266"
				radius="20"
				ariaLabel="three-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	)
}

export default Loader
