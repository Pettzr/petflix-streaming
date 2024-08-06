const express = require('express');
const router = express.Router();
const {createUserController, loginUserController, addRemoveMovieToWatchController, addRemoveMovieFavoritesController, checkMovieInUserListsController, logoutUserController, addRemoveMovieHistoryController}= require('../controller/userController')
const validateRegister = require('../middlewares/validateRegisterMiddleware');
const authenticateUser = require('../middlewares/authenticateUser')

router.post('/criar-usuario', validateRegister, createUserController);
router.post('/login-usuario', loginUserController);
router.post('/logout', logoutUserController)
router.patch('/add-del-movie-to-watch', authenticateUser, addRemoveMovieToWatchController);
router.patch('/add-del-movie-favorites', authenticateUser, addRemoveMovieFavoritesController);
router.patch('/add-del-movie-history', authenticateUser, addRemoveMovieHistoryController )
router.get('/check-movie-lists', authenticateUser, checkMovieInUserListsController)
router.get('/authenticate-user', authenticateUser, (req, res) => {
    if (req.userId) {
        return res.json(true)
    } else {
        return res.json(false)
    }
})

module.exports = router;
