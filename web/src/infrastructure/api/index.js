import Axios from 'axios';

const imageBaseUrl = 'https://image.tmdb.org/t/p/';
const baseUrl = 'http://localhost/api';

class Api {
  async getUpcomingMovies() {
    const response = await Axios.get(`${baseUrl}/movies`);
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
