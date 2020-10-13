const express = require('express')
const {getAllMovies, getOneMovie, createMovie, updateMovie, deleteMovie} = require('../controllers/moviesControllers')

function moviesAPI(app){
    
    /*  Creo mi router */
    const router = express.Router()

    /*  Asignar la ruta raiz */
    app.use('/api/movies', router)

    /*  CRUD */
    /*  Read */
    router.get('/', getAllMovies)

    /*  Read one movie */
    router.get('/:movieId', getOneMovie)

    /*  Create */
    router.post('/', createMovie)

    /*  Update */
    router.put('/:movieId', updateMovie)

    /*  Detele */
    router.delete('/:movieId', deleteMovie)

}

module.exports = moviesAPI