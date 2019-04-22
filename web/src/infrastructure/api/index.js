import Axios from 'axios';

const imageBaseUrl = 'https://image.tmdb.org/t/p/';
const baseUrl = 'http://localhost/api';

class Api {
  async getUpcomingMovies({ page } = {}) {
    const response = await Axios.get(`${baseUrl}/movies`, { params: { page } });
    return response.data;
  }

  async search({ query, page } = {}) {
    const response = await Axios.get(`${baseUrl}/movie/search`, {
      params: { page, query },
    });
    return response.data;
  }

  async getGenres() {
    const response = await Axios.get(`${baseUrl}/movie/genres`);
    return response.data.genres;
  }

  getImageUrl({ size = 'original', path }) {
    return `${imageBaseUrl}${size}${path}`;
  }
}

export default new Api();
