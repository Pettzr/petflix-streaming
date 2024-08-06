const { createMovieService, getAllMoviesService, getMovieByTitleService, getMoviesByGenreService, getMoviesBySearchService, getMoviesToWatchByUserService, getFavoriteMoviesByUserService, getMovieHistoryByUserService, getMoviesRecentService, getMoviesRatingService, getMoviesRandomService } = require('../services/movieServices');

async function postMovieController (req, res) {
    try {
        const movie = await createMovieService(req.body);
        res.status(201).send(movie)
    } catch (error) { 
        res.status(400).json( {message: error});
    }
}

async function getAllMoviesController (req, res) {
    try {
        const movies = await getAllMoviesService();
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: "Erro ao buscar filmes", error});
    }
}

async function getMovieByTitleController (req, res) {
    try {
        const movie = await getMovieByTitleService(req.params.slug)
        res.status(200).json(movie);
    } catch (error) {
        res.status(404).json({ message:"Filme não encontrado", error: error.message })
    }
}

async function getMoviesByGenreController (req, res) {
    try {
        const movies = await getMoviesByGenreService(req.params.genre);
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message:"Filmes não encontrado com o gênero selecionado", error: error.message })
    }
}

async function getMoviesBySearchController (req, res) {
    try{
        const movies = await getMoviesBySearchService(req.params.search);
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message:"Nenhum filme foi encontrado", error: error.message})
    }
}

async function getMoviesRandomController (req, res) {
    try{
        const movies = await getMoviesRandomService()
        res.status(200).json(movies);
    } catch (error) {
        res.status(404).json({ message: 'Nenhum filme foi encontrado', error: error.message })
    }
}

async function getMoviesRecentController (req, res) {
    try{
        const movies = await getMoviesRecentService()
        res.status(200).json(movies)
    } catch (error) {
        res.status(404).json({ message: 'Nenhum filme foi encontrado', error: error.message})
    }
}

async function getMoviesRatingController (req, res) {
    try{
        const movies = await getMoviesRatingService()
        res.status(200).json(movies)
    } catch (error) {
        res.status(404).json({ message: 'Nenhum filme foi encontrado', error: error.message})
    }
}

async function getMoviesToWatchByUserController (req, res) {
    try{
        const userMovies = await getMoviesToWatchByUserService(req.userId)
        res.status(200).json(userMovies.reverse())
    } catch (error) {
        console.error('Erro ao buscar filmes do usuário', error)
        res.status(500).json({ message: 'Erro ao buscar filmes do usuário' })
    }
}

async function getFavoriteMoviesByUserController (req, res) {
    try{
        const userMovies = await getFavoriteMoviesByUserService(req.userId)
        res.status(200).json(userMovies.reverse())
    } catch (error) {
        console.error('Erro ao buscar filmes do usuário', error)
        res.status(500).json({ message: 'Erro ao buscar filmes do usuário' })
    }
}

async function getMovieHistorysByUserController (req, res) {
    try{
        const userMovies = await getMovieHistoryByUserService(req.userId)
        res.status(200).json(userMovies.reverse())
    } catch (error) {
        console.error('Erro ao buscar filmes do usuário', error)
        res.status(500).json({ message: 'Erro ao buscar filmes do usuário' })
    }
}


module.exports = {
    postMovieController,
    getAllMoviesController, 
    getMovieByTitleController, 
    getMoviesByGenreController, 
    getMoviesBySearchController,
    getMoviesRandomController, 
    getMoviesRecentController,
    getMoviesRatingController,
    getMoviesToWatchByUserController, 
    getFavoriteMoviesByUserController,
    getMovieHistorysByUserController,
};