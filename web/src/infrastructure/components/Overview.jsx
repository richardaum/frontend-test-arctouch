import React from 'react';
import moviesStore from '../stores/moviesStore';
import Text from './Text';
import css from '../styles/css';
import measures from '../styles/measures';

export const overviewCss = css(`margin-top: ${measures.unit(3)}px }`);

export default function Overview({ movieId, ...props }) {
  return (
    <Text variant="body1" {...props}>
      {moviesStore.getMovie(movieId).overview}
    </Text>
  );
}
