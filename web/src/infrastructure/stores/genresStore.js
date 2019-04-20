import { observable, action } from 'mobx';

class GenresStore {
  #genresCache = {};

  @observable genres;

  getGenre(id) {
    if (!this.#genresCache[id]) {
      const genre = this.genres.find(genre => genre.id === id);
      this.#genresCache[id] = genre;
    }
    return this.#genresCache[id];
  }

  @action
  setGenres(genres) {
    this.genres = genres;
  }
}

export default new GenresStore();
