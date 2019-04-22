import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../stores/moviesStore';
import genresStore from '../stores/genresStore';
import Typography from '@material-ui/core/Typography';
import measures from '../styles/measures';
import colors from '../styles/colors';

const Genre = observer(function Genre({ genreId }) {
  const css = `
    && {
      display: inline-block;
      color: ${colors.dark.tahitiGold};
      text-transform: uppercase;
      margin-right: ${measures.unit(2)}px;
    }
  `;
  return (
    <Typography variant="caption" component="span" css={css}>
      {genresStore.getGenre(genreId).name}
    </Typography>
  );
});

export default observer(function Genres({ movieId }) {
  return moviesStore
    .getMovie(movieId)
    .genre_ids.map(genreId => <Genre key={genreId} genreId={genreId} />);
});
