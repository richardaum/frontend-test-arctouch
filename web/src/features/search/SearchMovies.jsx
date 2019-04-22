import React from 'react';
import styled from 'styled-components';
import MoviesItems from '../movies/MoviesItems';
import searchStore from '../../infrastructure/stores/searchStore';
import { Observer } from 'mobx-react';
import measures from '../../infrastructure/styles/measures';
import Input, { InputContainer } from './Input';

const Container = styled.div({
  height: '100vh',
  maxWidth: measures.content,
  display: 'flex',
  flexFlow: 'column nowrap',
});

export default function SearchMovies() {
  return (
    <Container>
      <InputContainer>
        <Input />
      </InputContainer>

      <Observer>
        {() => searchStore.query && <MoviesItems movies={searchStore.movies} />}
      </Observer>
    </Container>
  );
}
