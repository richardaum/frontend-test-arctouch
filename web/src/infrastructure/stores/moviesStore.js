import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';
import api from '../api';

class MoviesStore {
  #moviesCache = {};

  @observable movies;

  @observable moviesList = [];

  getMovies() {
    return this.moviesList;
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

  canLoadMore() {
    return this.movies.page < this.movies.total_pages;
  }

  @action
  setMovies(movies) {
    this.movies = movies;
    this.moviesList = [...this.moviesList, ...movies.results];
  }

  @autobind
  @action
  async handleVisibilityToFetchMore(sentinelVisibilityRatio) {
    const canSeeSentinel = sentinelVisibilityRatio > 0;
    if (this.canLoadMore() && canSeeSentinel) {
      const page = this.movies.page + 1;
      const movies = await api.getUpcomingMovies({ page });
      this.setMovies(movies);
    }
  }
}

export default new MoviesStore();
