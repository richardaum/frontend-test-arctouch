import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../../infrastructure/stores/moviesStore';
import styled from 'styled-components';
import measures from '../../../infrastructure/styles/measures';
import Sentinel from '../../../infrastructure/components/Sentinel';
import Loading from './Loading';
import MovieItem from './MovieItem';

const Container = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  padding: measures.unit(3),
  paddingBottom: 0,
});

export default observer(function MoviesItems() {
  const cssSentinel = `
    display: flex;
  `;
  return (
    <div>
      <Container>
        {moviesStore.getMovies().map(movie => (
          <MovieItem key={movie.id} movieId={movie.id} />
        ))}
      </Container>
      <Sentinel
        css={cssSentinel}
        onVisibilityChange={moviesStore.handleVisibilityToFetchMore}
      >
        {moviesStore.canLoadMore() ? <Loading /> : null}
      </Sentinel>
    </div>
  );
});
