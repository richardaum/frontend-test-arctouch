import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../../infrastructure/stores/moviesStore';
import api from '../../../infrastructure/api';
import styled from 'styled-components';
import measures from '../../../infrastructure/styles/measures';
import Genres from './Genres';
import ReleaseDate from './ReleaseDate';
import Title from './Title';

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

const MovieItem = observer(function MovieItem({ movieId }) {
  const src = api.getImageUrl({
    size: 'w185',
    path: moviesStore.getMovie(movieId).poster_path,
  });
  return (
    <Card>
      <img src={src} alt="" />
      <Description>
        <ReleaseDate movieId={movieId} />
        <Title movieId={movieId} />
        <Genres movieId={movieId} />
      </Description>
    </Card>
  );
});

const Container = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  padding: measures.unit(3),
  paddingBottom: 0,
});

export default observer(function MoviesItems() {
  return (
    <Container>
      {moviesStore.movies.results.map(movie => (
        <MovieItem key={movie.id} movieId={movie.id} />
      ))}
    </Container>
  );
});
