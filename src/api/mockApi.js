export const fetchPopularMovies = async () => {
	// Simulated API response
	return {
		results: [
			{
				id: 1,
				title: 'Inception',
				overview: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.',
			},
			{
				id: 2,
				title: 'The Dark Knight',
				overview: 'Batman faces the Joker, a criminal mastermind who wants to plunge Gotham City into anarchy.',
			},
			{
				id: 3,
				title: 'Interstellar',
				overview: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity’s survival.',
			},
		],
	};
};
