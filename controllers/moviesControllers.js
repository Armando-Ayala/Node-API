const MoviesServices = require('../services/moviesServices')

const moviesServices = new MoviesServices()


const getAllMovies = async (req, res, next) => {
  const {tags} = req.query
  try {
    //Descomentar linea para arrojar un error y probar los middleware
    //throw new Error('Error al obtener todas las peliculas')
    const movies = await moviesServices.getAllMoviesService(tags)
    res.status(200).json({
      data: movies,
      message: 'todas las peliculas'
    })
  } catch (err) {
    next(err)
  }
}

const getOneMovie = async (req, res, next) => {
  const {
    movieId
  } = req.params
  try {
    const movie = await moviesServices.getOneMovieService(movieId)
    res.status(200).json({
      data: movie,
      message: 'Una pelicula'
    })
  } catch (err) {
    next(err)
  }
}

const createMovie = async (req, res, next) => {
  const {
    body: movie
  } = req
  const createdMovie = await moviesServices.createMoviesService(movie)
  try {
    res.status(201).json({
      data: createdMovie,
      message: 'done'
    })
  } catch (err) {
    next(err)
  }
}

const updateMovie = async (req, res, next) => {
  const {
    body: movie
  } = req
  const {
    movieId
  } = req.params
  const updatedMovie = await moviesServices.updateMoviesService(
    movieId,
    movie
  )
  try {
    res.status(200).json({
      data: updatedMovie,
      message: 'updated movie'
    })
  } catch (err) {
    next(err)
  }
}

const deleteMovie = async (req, res, next) => {
  const {
    movieId
  } = req.params
  const deletedMovie = await moviesServices.deletedMoviesService(movieId)
  try {
    res.status(200).json({
      data: deletedMovie,
      message: 'deleted movie'
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  getAllMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie
}