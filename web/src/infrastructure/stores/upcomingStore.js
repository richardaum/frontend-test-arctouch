import { observable, action } from 'mobx';
import autobind from 'autobind-decorator';
import api from '../api';
import moviesStore from './moviesStore';

class UpcomingStore {
  @observable response;

  @observable ids = [];

  @action
  setResponse(response) {
    this.response = response;
  }

  getMovies() {
    return this.ids;
  }

  @action
  setMovies(movies) {
    this.ids = [...this.ids, ...movies.map(movie => movie.id)];
  }

  canLoadMore() {
    return this.response.page < this.response.total_pages;
  }

  @autobind
  @action
  async handleVisibilityToFetchMore(sentinelVisibilityRatio) {
    const canSeeSentinel = sentinelVisibilityRatio > 0;
    if (this.canLoadMore() && canSeeSentinel) {
      const page = this.response.page + 1;
      const response = await api.getUpcomingMovies({ page });

      moviesStore.setMovies(response.results);
      this.setMovies(response.results);
      this.setResponse(response);
    }
  }
}

export default new UpcomingStore();
