import httpService from "./httpServices";

const BASE_URL = process.env.REACT_APP_AXIOS_URL

const movieService = {
    getAllMovies: () => httpService.get(`${BASE_URL}/filmes`),
    getMoviesByGenre: (genre) => httpService.get(`${BASE_URL}/filmes/genre/${encodeURIComponent(genre)}`),
    getMoviesBySearch: (search) => httpService.get(`${BASE_URL}/filmes/search/${encodeURIComponent(search)}`),
    getMovieByTitle: (slug) => httpService.get(`${BASE_URL}/filmes/title/${encodeURIComponent(slug)}`),
    getRandomMovies: () => httpService.get(`${BASE_URL}/filmes/random`),
    getRecentMovies: () => httpService.get(`${BASE_URL}/filmes/recent`),
    getRatingMovies: () => httpService.get(`${BASE_URL}/filmes/rating`),
    getUserMoviesToWatch: () => httpService.get(`${BASE_URL}/filmes-to-watch/user`),
    getUserFavoriteMovies: () => httpService.get(`${BASE_URL}/favorite-filmes/user`),
    getUserMovieHistory: () => httpService.get(`${BASE_URL}/filmes-history/user`),
    createMovie: (movieData, image) => {
        const formData = new FormData();
        for (const key in movieData){
            formData.append(key, movieData[key]);
        }
        formData.append('image', image);

        return httpService.post('/enviarFilme', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
    },
};

export default movieService;
