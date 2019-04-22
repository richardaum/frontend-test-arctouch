import React from 'react';
import styled from 'styled-components';
import api from '../../infrastructure/api';
import moviesStore from '../../infrastructure/stores/moviesStore';
import measures from '../../infrastructure/styles/measures';
import Genres from '../../infrastructure/components/Genres';
import Text from '../../infrastructure/components/Text';
import ReleaseDate, {
  releaseDateCss,
} from '../../infrastructure/components/ReleaseDate';
import Overview, {
  overviewCss,
} from '../../infrastructure/components/Overview';

const Movie = styled.div(props => ({
  height: '90%',
  background: `url(${props.image}) no-repeat center center fixed`,
  backgroundSize: 'cover',
}));

const Content = styled.div({
  padding: `0 ${measures.unit(2)}px`,
  maxWidth: measures.content,
  margin: `auto auto ${measures.bottomCover + measures.unit(2)}px auto`,
});

const Shadow = styled.div({
  height: '100%',
  background: 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
  display: 'flex',
});

const Title = styled(Text).attrs({ variant: 'h2' })({
  '&&': {
    fontWeight: 600,
    textTransform: 'uppercase',
    paddingBottom: measures.unit(1),
  },
});

export default function Cover() {
  const movie = moviesStore.getFirstMovie();
  const src = api.getImageUrl({ path: movie.backdrop_path });

  return (
    <Movie image={src}>
      <Shadow>
        <Content>
          <ReleaseDate css={releaseDateCss} movieId={movie.id} />
          <Title>{movie.title}</Title>
          <Genres movieId={movie.id} />
          <Overview css={overviewCss} movieId={movie.id} />
        </Content>
      </Shadow>
    </Movie>
  );
}
