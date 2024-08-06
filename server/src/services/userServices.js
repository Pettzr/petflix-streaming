const User = require('../models/userModels.js');
const bcrypt = require('bcrypt');

async function createUserService (userName, password) {
    const user = new User({
        userName,
        password
    });
    await user.save();
    return user;
}

async function loginUserService (userName, password) {
    const user = await User.findOne({ userName });
    if (!user) {
        throw new Error('Usuário não encontrado.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Senha incorreta.');
    }
    
    return user;
}

async function addRemoveMovieToWatchService (userId, movieId) {
        const user = await User.findById(userId)
        if (!user) {
            throw new Error ('Usuário não está logado')
        }

        let message;

        if (user.moviesToWatch.includes(movieId)) {
            user.moviesToWatch.pull(movieId);
            message = "Filme removido do Assitir mais tarde"
        } else {
            user.moviesToWatch.push(movieId)
            message = "Filme adicionado ao Assistir mais tarde"
        }

        await user.save()

        return {user, message};
}

async function addRemoveMovieFavoritesService (userId, movieId) {
    const user = await User.findById(userId)
    if (!user) {
        throw new Error ('Usuário não está logado')
    }

    let message;

    if (user.favoriteMovies.includes(movieId)) {
        user.favoriteMovies.pull(movieId);
        message = "Filme removido dos Favoritos"
    } else {
        user.favoriteMovies.push(movieId)
        message = "Filme adicionado aos Favoritos"
    }

    await user.save()

    return {user, message};
}

async function addRemoveMovieHistoryService (userId, movieId) {
    const user = await User.findById(userId)
    if (!user) {
        throw new Error ('Usuário não está logado')
    }

    let message;

    if (user.moviesHistory.includes(movieId)) {
        user.moviesHistory.pull(movieId);
        message = "Filme removido dos Favoritos"
    } else {
        user.moviesHistory.push(movieId)
        message = "Filme adicionado aos Favoritos"
    }

    await user.save()

    return {user, message};
}

async function checkMovieInUserListsService (userId, movieId) {
    const user = await User.findById(userId)
    if (!user) {
        throw new Error ('Usuário não está logado')
    }

    let isIncludedFavorite = false;
    let isIncludedToWatch = false;
    let isIncludedHistory = false

    if (user.favoriteMovies.includes(movieId)) {
        isIncludedFavorite = true;
    }

    if (user.moviesToWatch.includes(movieId)) {
        isIncludedToWatch = true;
    }
    if (user.moviesHistory.includes(movieId)) {
        isIncludedHistory = true;
    }

    return {isIncludedFavorite, isIncludedToWatch, isIncludedHistory}
}

module.exports = {
    createUserService,
    loginUserService,
    addRemoveMovieToWatchService,
    addRemoveMovieFavoritesService,
    addRemoveMovieHistoryService,
    checkMovieInUserListsService,
}