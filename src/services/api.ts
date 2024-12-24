import axios from "axios"
import { Image } from "../components/App/App.types";

const API_KEY = import.meta.env.VITE_API_KEY_UNSPLASH;

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

interface Response {
	total: number,
	total_pages: number,
	results: Image[]
}

export const fetchImages = async (topic: string, page: number): Promise<Response> => {
	const response = await axios.get<Response>(`/?client_id=${API_KEY}&query=${topic}&page=${page}&per_page=28`);
	return response.data;
}


// ==========================================================================================================================

// Унiверсальний варiант <T>

/*
export const fetchImages = async <T>(topic: string, page: number): Promise<T> => {
	const response = await axios.get<T>(`/?client_id=${API_KEY}&query=${topic}&page=${page}&per_page=28`);
	return response.data;
};
*/