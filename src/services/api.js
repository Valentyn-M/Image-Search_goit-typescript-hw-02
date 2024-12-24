import axios from "axios"

const API_KEY = import.meta.env.VITE_API_KEY_UNSPLASH;

axios.defaults.baseURL = "https://api.unsplash.com//search/photos";

export const fetchImages = async (topic, page) => {
	const response = await axios.get(`/?client_id=${API_KEY}&query=${topic}&page=${page}&per_page=28`);
	return response.data;
}