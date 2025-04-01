import React, { useEffect, useState } from 'react';
import { fetchPopularMovies } from '../api/mockApi'; // Updated import

const PopularMovies = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getMovies = async () => {
			try {
				console.log('Fetching popular movies...');
				const storedMovies = localStorage.getItem('popularMovies');
				if (storedMovies) {
					console.log('Loaded movies from Local Storage.');
					setMovies(JSON.parse(storedMovies));
					return;
				}

				const data = await fetchPopularMovies(); // Use mock API
				if (data && data.results) {
					console.log('Movies fetched successfully:', data.results);
					setMovies(data.results);
					localStorage.setItem('popularMovies', JSON.stringify(data.results)); // Save to Local Storage
				} else {
					console.error('Failed to load movies: No results found.');
					setError('Failed to load movies.');
				}
			} catch (err) {
				console.error('An error occurred while fetching movies:', err);
				setError('An error occurred while fetching movies.');
			}
		};
		getMovies();
	}, []);

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>Popular Movies</h1>
			{movies.length === 0 ? (
				<p>No movies available at the moment.</p>
			) : (
				<ul>
					{movies.map((movie) => (
						<li key={movie.id}>
							<h2>{movie.title}</h2>
							<p>{movie.overview}</p>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default PopularMovies;
