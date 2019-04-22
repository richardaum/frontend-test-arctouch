import React, { useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import { Observer } from 'mobx-react';
import detailsStore from '../../../infrastructure/stores/detailsStore';
import api from '../../../infrastructure/api';
import styled from 'styled-components';
import measures from '../../../infrastructure/styles/measures';
import Text from '../../../infrastructure/components/Text';
import ReleaseDate, {
  releaseDateCss,
} from '../../../infrastructure/components/ReleaseDate';
import Overview, {
  overviewCss,
} from '../../../infrastructure/components/Overview';
import Genres from '../../../infrastructure/components/Genres';
import CloseButton from './CloseButton';
import notFound from '../../../infrastructure/assets/404.jpg';

const Movie = styled.div(props => ({
  background: `url(${props.image}) no-repeat center center fixed`,
  backgroundSize: 'contain',
  height: 'calc(100vh - 96px)',
}));

const Shadow = styled.div({
  height: '100%',
  background:
    'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)',
  display: 'flex',
});

const Content = styled.div({
  color: 'white',
  padding: `0 ${measures.unit(2)}px`,
  width: measures.content,
  margin: `auto auto ${measures.bottomCover + measures.unit(2)}px auto`,
});

const Title = styled(Text).attrs({ variant: 'h3' })({
  '&&': {
    fontWeight: 600,
    textTransform: 'uppercase',
    paddingBottom: measures.unit(1),
  },
});

const DialogContent = function DialogContent() {
  const movie = detailsStore.selectedMovie;

  if (!movie) return null;

  const src = movie.backdrop_path
    ? api.getImageUrl({ size: 'w1280', path: movie.backdrop_path })
    : notFound;

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
};

export default function Details() {
  const handleClose = useCallback(() => {
    detailsStore.setSelectedMovieId(null);
  });
  return (
    <Observer>
      {() => (
        <Dialog
          fullWidth
          onClose={handleClose}
          open={!!detailsStore.selectedMovieId}
          maxWidth="xl"
        >
          <CloseButton />
          <DialogContent />
        </Dialog>
      )}
    </Observer>
  );
}
