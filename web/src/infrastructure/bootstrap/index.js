import api from '../api';
import moviesStore from '../stores/moviesStore';
import genresStore from '../stores/genresStore';
import upcomingStore from '../stores/upcomingStore';

export async function bootstrap() {
  const [moviesResponse, genresReponse] = await Promise.all([
    api.getUpcomingMovies(),
    api.getGenres(),
  ]);

  upcomingStore.setResponse(moviesResponse);
  upcomingStore.setMovies(moviesResponse.results);

  moviesStore.setMovies(moviesResponse.results);
  genresStore.setGenres(genresReponse);
}
