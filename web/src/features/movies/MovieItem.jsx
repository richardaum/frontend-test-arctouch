import React, { useCallback } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import moviesStore from '../../infrastructure/stores/moviesStore';
import api from '../../infrastructure/api';
import Genres from './Genres';
import ReleaseDate from './ReleaseDate';
import Title from './Title';
import NoPoster from './NoPoster';
import measures from '../../infrastructure/styles/measures';
import detailsStore from '../../infrastructure/stores/detailsStore';

const Card = styled.div({
  cursor: 'pointer',
  boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  display: 'flex',
  marginBottom: measures.unit(3),
  flexFlow: 'column nowrap',
  width: 185,

  '&:hover': {
    boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  },
});

const Description = styled.div({
  padding: measures.unit(2),
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-all',
});

const Image = observer(function Image({ movieId }) {
  const src = api.getImageUrl({
    size: 'w185',
    path: moviesStore.getMovie(movieId).poster_path,
  });
  return moviesStore.getMovie(movieId).poster_path ? (
    <img src={src} alt="" />
  ) : (
    <NoPoster />
  );
});

const MovieItem = function MovieItem({ movieId }) {
  const handleClick = useCallback(() => {
    detailsStore.setSelectedMovieId(movieId);
  });
  return (
    <Card onClick={handleClick}>
      <Image movieId={movieId} />
      <Description>
        <ReleaseDate movieId={movieId} />
        <Title movieId={movieId} />
        <Genres movieId={movieId} />
      </Description>
    </Card>
  );
};

export default MovieItem;
