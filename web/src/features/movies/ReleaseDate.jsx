import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../infrastructure/stores/moviesStore';
import parse from 'date-fns/parse';
import { format } from 'date-fns';
import Typography from '@material-ui/core/Typography';

export default observer(function ReleaseDate({ movieId }) {
  return (
    <Typography variant="caption">
      {format(parse(moviesStore.getMovie(movieId).release_date), 'D MMM, YYYY')}
    </Typography>
  );
});
