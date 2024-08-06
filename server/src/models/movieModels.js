const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    genre: {
        type: [String],
        required: true,
        enum: {
            values: ['Ação', 'Comédia', 'Drama', 'Terror', 'Romance', 'Fantasia', 'Aventura'],
            message: '{VALUE} não é um gênero válido'
        }   
    },
    image: {
        type: String,
        required: true,
    },
    writers: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    releaseYear: {
        type: String,
        required: true,
    },
    trailerURL: {
        type: String,
    },
    rating: {
        type: String,
    }

})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;