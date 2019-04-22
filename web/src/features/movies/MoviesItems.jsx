import React, { useCallback } from 'react';
import { Observer } from 'mobx-react';
import styled from 'styled-components';
import measures from '../../infrastructure/styles/measures';
import Sentinel from '../../infrastructure/components/Sentinel';
import Loading from './Loading';
import MovieItem from './MovieItem';
import upcomingStore from '../../infrastructure/stores/upcomingStore';
import tabsStore, {
  UPCOMING,
  SEARCH,
} from '../../infrastructure/stores/tabsStore';
import searchStore from '../../infrastructure/stores/searchStore';

const Container = styled.div({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-evenly',
  padding: measures.unit(3),
  paddingBottom: 0,
});

const Spinner = function Spinner() {
  if (tabsStore.selectedTab === UPCOMING) {
    return upcomingStore.canLoadMore() ? <Loading /> : null;
  }
  if (tabsStore.selectedTab === SEARCH) {
    return searchStore.canLoadMore() ? <Loading /> : null;
  }
};

export default function MoviesItems({ movies }) {
  const cssSentinel = `
    display: flex;
  `;
  const handleVisibilityChange = useCallback(ratio => {
    if (tabsStore.selectedTab === UPCOMING) {
      upcomingStore.handleVisibilityToFetchMore(ratio);
    } else if (tabsStore.selectedTab === SEARCH && searchStore.response) {
      searchStore.handleVisibilityToFetchMore(ratio);
    }
  });
  return (
    <div>
      <Container>
        <Observer>
          {() =>
            movies.map(movieId => <MovieItem key={movieId} movieId={movieId} />)
          }
        </Observer>
      </Container>
      <Sentinel css={cssSentinel} onVisibilityChange={handleVisibilityChange}>
        <Observer>
          {() => {
            if (
              (tabsStore.selectedTab === SEARCH &&
                searchStore.isLoadingVisible) ||
              tabsStore.selectedTab === UPCOMING
            ) {
              return <Spinner />;
            }
            return null;
          }}
        </Observer>
      </Sentinel>
    </div>
  );
}
