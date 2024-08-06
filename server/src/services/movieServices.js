const Movie = require('../models/movieModels');
const User = require('../models/userModels');

async function createMovieService(movieData) {
    const { title, synopsis, genre, writers, director, releaseYear, trailerURL } = movieData

    if (!title || !synopsis || !genre || !writers || !director || !releaseYear || !trailerURL) {
        throw new Error("Todos os campos são obrigatórios");
    }
    
    const movie = new Movie ({ title, synopsis, genre, image, writers, director, releaseYear, trailerURL })
    await movie.save();
    return movie;
}

async function getAllMoviesService () {
    const movies = await Movie.find();
    return movies;
}

async function getMovieByTitleService (slug) {
    const movie = await Movie.findOne({ slug });
    return movie;
}

async function getMoviesByGenreService (genre) {
    const movies = await Movie.find({ genre });
    return movies;
}

async function getMoviesBySearchService (search) {
    const regex = new RegExp(search, 'i')
    const movies = await Movie.find({ title: { $regex: regex}})
    return movies
}

async function getMoviesRandomService () {
    const movies = await Movie.aggregate([
        { $sample: { size: 16 } }
    ]);
    return movies;
}

async function getMoviesRecentService () {
    const movies = await Movie.find().sort({ releaseYear: -1}).limit(10);
    return movies
}

async function getMoviesRatingService () {
    const movies = await Movie.find().sort({ rating: -1 }).limit(10);
    return movies
}

async function getMoviesToWatchByUserService (userId) {
    const userMovies = await User.findById(userId).populate('moviesToWatch').exec()
    if(!userMovies) {
        return res.status(404).json({ message: 'O usuário não possui filmes salvos' })
    }
    return userMovies.moviesToWatch
}

async function getFavoriteMoviesByUserService (userId) {
    const userMovies = await User.findById(userId).populate('favoriteMovies').exec()
    if(!userMovies) {
        return res.status(404).json({ message: 'O usuário não possui filmes salvos' })
    }
    return userMovies.favoriteMovies
}

async function getMovieHistoryByUserService (userId) {
    const userMovies = await User.findById(userId).populate('moviesHistory').exec()
    if(!userMovies) {
        return res.status(404).json({ message: 'O usuário não possui filmes salvos' })
    }
    return userMovies.moviesHistory
}

module.exports = {
    createMovieService,
    getAllMoviesService,
    getMovieByTitleService,
    getMoviesByGenreService,
    getMoviesBySearchService,
    getMoviesRandomService,
    getMoviesRecentService,
    getMoviesRatingService,
    getMoviesToWatchByUserService,
    getFavoriteMoviesByUserService,
    getMovieHistoryByUserService,
};