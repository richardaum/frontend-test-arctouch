import React from 'react';
import Typography from '@material-ui/core/Typography';
import { observer } from 'mobx-react';
import moviesStore from '../../infrastructure/stores/moviesStore';
import measures from '../../infrastructure/styles/measures';

const css = `
  && {
    text-transform: uppercase;
    font-weight: 300;
    margin-top: ${measures.unit(1)}px;
  }
`;

export default observer(function Title({ movieId }) {
  return (
    <Typography noWrap css={css}>
      {moviesStore.getMovie(movieId).title}
    </Typography>
  );
});
