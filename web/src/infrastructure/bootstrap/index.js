import api from '../api';
import moviesStore from '../stores/moviesStore';
import genresStore from '../stores/genresStore';

export async function bootstrap() {
  const [movies, genres] = await Promise.all([
    api.getUpcomingMovies(),
    api.getGenres(),
  ]);

  moviesStore.setMovies(movies);
  genresStore.setGenres(genres);
}
