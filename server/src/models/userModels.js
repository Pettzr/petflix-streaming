const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    moviesToWatch: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    favoriteMovies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],
    moviesHistory: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }],
})

const User = mongoose.model('User', userSchema);

module.exports = User;
