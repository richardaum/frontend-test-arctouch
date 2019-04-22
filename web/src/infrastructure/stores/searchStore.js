import { observable, action } from 'mobx';
import api from '../api';
import moviesStore from './moviesStore';
import autobind from 'autobind-decorator';

class SearchStore {
  @observable query = '';
  @observable response;
  @observable movies = [];
  @observable isLoadingVisible = false;

  @action
  setQuery(query) {
    this.query = query;
  }

  @action
  setResponse(response) {
    const movies = response.results || [];

    this.response = response;
    this.movies = [...this.movies, ...movies.map(movie => movie.id)];

    moviesStore.setMovies(movies);
  }

  @action
  async search() {
    this.movies = [];
    const response = await api.search({ query: this.query });
    this.setResponse(response);
  }

  @action
  setIsLoadingVisible(isLoadingVisible) {
    this.isLoadingVisible = isLoadingVisible;
  }

  canLoadMore() {
    return this.response && this.response.page < this.response.total_pages;
  }

  @autobind
  @action
  async handleVisibilityToFetchMore(sentinelVisibilityRatio) {
    const canSeeSentinel = sentinelVisibilityRatio > 0;
    if (this.canLoadMore() && canSeeSentinel) {
      const page = this.response.page + 1;
      const response = await api.search({ query: this.query, page });

      moviesStore.setMovies(response.results);
      this.setResponse(response);
    }
  }
}

export default new SearchStore();
