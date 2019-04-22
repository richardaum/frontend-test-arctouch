import { observable, action, computed } from 'mobx';
import moviesStore from './moviesStore';

class DetailsStore {
  @observable selectedMovieId;

  @action
  setSelectedMovieId(id) {
    this.selectedMovieId = id;
  }

  @computed
  get selectedMovie() {
    return moviesStore.getMovie(this.selectedMovieId);
  }
}

export default new DetailsStore();
