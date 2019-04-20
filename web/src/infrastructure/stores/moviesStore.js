import { observable, action } from 'mobx';

class MoviesStore {
  #moviesCache = {};

  @observable movies;

  getMovie(id) {
    if (!this.#moviesCache[id]) {
      const movie = this.movies.results.find(movie => movie.id === id);
      this.#moviesCache[id] = movie;
    }
    return this.#moviesCache[id];
  }

  getFirstMovie() {
    return this.getMovie(this.movies.results[0].id);
  }

  @action
  setMovies(movies) {
    this.movies = movies;
  }
}

export default new MoviesStore();
