export interface Image {
	id: string;
	description: string;
	alt_description: string;
	likes: number;
	urls: {
		small: string;
		regular: string;
	}
}