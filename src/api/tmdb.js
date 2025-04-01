const API_KEY = 'your_tmdb_api_key'; // Replace with your TMDB API key
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchPopularMovies = async () => {
	try {
		const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
		if (!response.ok) {
			throw new Error('Failed to fetch popular movies');
		}
		return await response.json();
	} catch (error) {
		console.error(error);
		return null;
	}
};
