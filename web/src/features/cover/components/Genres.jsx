import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../../infrastructure/stores/moviesStore';
import genresStore from '../../../infrastructure/stores/genresStore';
import Typography from '@material-ui/core/Typography';
import measures from '../../../infrastructure/styles/measures';
import colors from '../../../infrastructure/styles/colors';

const Genre = observer(function Genre({ genreId }) {
  const css = `
    && {
      display: inline-block;
      color: ${colors.sunflower};
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

export default observer(function Genres() {
  return moviesStore
    .getFirstMovie()
    .genre_ids.map(genreId => <Genre key={genreId} genreId={genreId} />);
});
