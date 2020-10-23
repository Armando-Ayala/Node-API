const moviesMoks = require('../utils/mocks/peliculasMocks')
const Movie = require('../models/Movies')

class MoviesServices {

  async getAllMoviesService(tags) {
    if (tags) {
      const query = {tags:{$in: tags}}
      const movies = await Movie.find(query)
      return movies || []
    }
    const movies = await Movie.find()
    return movies || []
  }

  async getOneMovieService(movieId) {
    const movies = await Movie.findById(movieId)
    return movies || []
  }

  async createMoviesService(movie) {
    const createdMovie = await Movie.create(movie)
    return createdMovie || {}
  }

  async updateMoviesService(movieId, movie) {
    const updatedMovie = await Movie.findByIdAndUpdate(movieId, movie, {new:true})
    return updatedMovie.id
  }

  async deletedMoviesService(movieId) {
    try {
      const deletedMovie = await Movie.findByIdAndDelete(movieId)
      return deletedMovie.id
    } catch (error) {
      console.log(error)
      return {message: 'Pelicula no encontrada'}
    }
  }

}

module.exports = MoviesServices