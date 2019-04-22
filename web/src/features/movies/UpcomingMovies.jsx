import React from 'react';
import MoviesItems from './MoviesItems';
import upcomingStore from '../../infrastructure/stores/upcomingStore';
import { observer } from 'mobx-react';

export default observer(function UpcomingMovies() {
  return <MoviesItems movies={upcomingStore.getMovies()} />;
});
