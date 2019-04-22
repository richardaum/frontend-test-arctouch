import { observable, action } from 'mobx';

class MoviesStore {
  #moviesCache = {};
  @observable movies = [];

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    if (!this.#moviesCache[id]) {
      const movie = this.getMovies().find(movie => movie.id === id);
      this.#moviesCache[id] = movie;
    }
    return this.#moviesCache[id];
  }

  getFirstMovie() {
    const firstMovieId = this.getMovies()[0].id;
    return this.getMovie(firstMovieId);
  }

  @action
  setMovies(movies) {
    this.movies = [...this.movies, ...movies];
  }
}

export default new MoviesStore();
