import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../../infrastructure/stores/moviesStore';
import genresStore from '../../../infrastructure/stores/genresStore';
import Typography from '@material-ui/core/Typography';
import measures from '../../../infrastructure/styles/measures';
import colors from '../../../infrastructure/styles/colors';

export default observer(function Genres({ movieId }) {
  const css = `
    && {
      display: inline-block;
      color: ${colors.light.hawaiianTan};
      margin-right: ${measures.unit(2)}px;
    }
  `;
  return (
    <Typography variant="caption" component="span" css={css} noWrap>
      {moviesStore
        .getMovie(movieId)
        .genre_ids.map(genreId => genresStore.getGenre(genreId).name)
        .join(', ')}
    </Typography>
  );
});
