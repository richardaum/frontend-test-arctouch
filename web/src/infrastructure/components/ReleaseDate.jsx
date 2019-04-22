import React from 'react';
import { observer } from 'mobx-react';
import parse from 'date-fns/parse';
import { format } from 'date-fns';
import Text from './Text';
import moviesStore from '../stores/moviesStore';
import css from '../styles/css';
import colors from '../styles/colors';

export const releaseDateCss = css(`color: ${colors.dark.tahitiGold};`);

export default observer(function ReleaseDate({ movieId, ...props }) {
  return (
    <Text variant="caption" {...props}>
      {format(parse(moviesStore.getMovie(movieId).release_date), 'D MMM, YYYY')}
    </Text>
  );
});
