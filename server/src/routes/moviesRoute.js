const express = require('express');
const {postMovieController, getAllMoviesController, getMovieByTitleController, getMoviesByGenreController, getMoviesBySearchController, getMoviesToWatchByUserController, getFavoriteMoviesByUserController, getMoviesRecentController, getMoviesRatingController, getMoviesRandomController, getMovieHistorysByUserController} = require('../controller/movieController')
const router = express.Router();
const authenticateUser = require('../middlewares/authenticateUser');


//router.post('/enviarFilme', postMovieController)
router.get('/filmes', getAllMoviesController)
router.get('/filmes/title/:slug', getMovieByTitleController)
router.get('/filmes/genre/:genre', getMoviesByGenreController)
router.get('/filmes/search/:search', getMoviesBySearchController)
router.get('/filmes/random', getMoviesRandomController)
router.get('/filmes/recent', getMoviesRecentController)
router.get('/filmes/rating', getMoviesRatingController)
router.get('/filmes-to-watch/user', authenticateUser, getMoviesToWatchByUserController)
router.get('/favorite-filmes/user', authenticateUser, getFavoriteMoviesByUserController)
router.get('/filmes-history/user', authenticateUser, getMovieHistorysByUserController)

module.exports = router;
