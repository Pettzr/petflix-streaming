import httpService from "./httpServices";

const BASE_URL = process.env.REACT_APP_AXIOS_URL

const userService = {
    createUser : (formData) => httpService.post(`${BASE_URL}/criar-usuario`, formData),
    loginUser : (formData) => httpService.post(`${BASE_URL}/login-usuario`, formData),
    logout : () => httpService.post(`${BASE_URL}/logout`),
    addRemoveMovieToWatch : (movieId) => httpService.patch(`${BASE_URL}/add-del-movie-to-watch`, movieId),
    addRemoveMovieFavorites: (movieId) => httpService.patch(`${BASE_URL}/add-del-movie-favorites`, movieId),
    addRemoveMovieHistory: (movieId) => httpService.patch(`${BASE_URL}/add-del-movie-history`, movieId),
    userAuthenticate : () => httpService.get(`${BASE_URL}/authenticate-user`),
    checkMovieInUserLists: (movieId) => httpService.get(`${BASE_URL}/check-movie-lists`, {params: {movieId}})
}

export default userService;
