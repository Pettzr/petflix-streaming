const {createUserService, loginUserService, addRemoveMovieToWatchService, addRemoveMovieFavoritesService, checkMovieInUserListsService, addRemoveMovieHistoryService} = require('../services/userServices.js')
const jwt = require('jsonwebtoken');
require('dotenv').config();

async function createUserController(req, res) {

    try{
        const {userName, password}= req.body
        await createUserService(userName, password)
        res.status(201).json({message: 'Usuario criado com sucesso!'})
    }
    catch (error){
        console.error('Erro criar usuario', error);
        res.status(400).json({message: 'Erro ao criar usuário'})
    }

}

async function loginUserController (req, res) {
    
    try {
        const {userName, password} = req.body
        const filteredUserName = userName.trim();
        const user = await loginUserService(filteredUserName, password)

        const token = jwt.sign({id: user.id}, process.env.SECRET_JWT, {expiresIn: "10h"})

        res.cookie('token', token, {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
            maxAge: 36000000,
        })

        res.status(200).json({ message: "Usuario logado com sucesso" })
    } catch (error) {
        console.error('Erro ao validar login', error);
        res.status(401).json({ message: error.message });
    }
} 

async function logoutUserController(req, res) {
    try{
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'none',
        })
        res.status(200).json({message: 'Usuário deslogado com sucesso'})
    } catch (error) {
        console.error('Erro ao deslogar o usuário', error)
        res.status(500).json({message: 'Erro ao deslogar o usuário'})
    }
}

async function addRemoveMovieToWatchController (req, res) {
    try{
        userId = req.userId
        movieId = (req.body.movieId)
        const {user, message} = await addRemoveMovieToWatchService(userId, movieId)
        res.status(200).json({ message: message, user: user})
    } catch(error) {
        console.error('Erro ao adicionar/remover filme:', error);
        res.status(500).json({ message: 'Erro ao adicionar/remover filme.' });
    }

}

async function addRemoveMovieFavoritesController (req, res) {
    try{
        userId = req.userId
        movieId = (req.body.movieId)
        const {user, message} = await addRemoveMovieFavoritesService(userId, movieId)
        res.status(200).json({ message: message, user: user})
    } catch(error) {
        console.error('Erro ao adicionar/remover filme:', error);
        res.status(500).json({ message: 'Erro ao adicionar/remover filme.' });
    }
}

async function addRemoveMovieHistoryController (req, res) {
    try{
        userId = req.userId
        movieId = (req.body.movieId)
        const {user, message} = await addRemoveMovieHistoryService(userId, movieId)
        res.status(200).json({ message: message, user: user})
    } catch(error) {
        console.error('Erro ao adicionar/remover filme:', error);
        res.status(500).json({ message: 'Erro ao adicionar/remover filme.' });
    }
}

async function checkMovieInUserListsController (req, res) {
    try{
        userId = req.userId
        movieId = req.query.movieId
        const {isIncludedFavorite, isIncludedToWatch, isIncludedHistory} = await checkMovieInUserListsService(userId, movieId)
        res.status(200).json({isIncludedFavorite, isIncludedToWatch, isIncludedHistory})
    } catch(error) {
        console.error('Erro ao acessar filme do usuário', error);
        res.status(500).json({ message: 'Erro ao adicionar/remover filme.' });
    }
}

module.exports = {
    createUserController,
    loginUserController,
    logoutUserController,
    addRemoveMovieToWatchController,
    addRemoveMovieFavoritesController,
    addRemoveMovieHistoryController,
    checkMovieInUserListsController,
};
