import React from 'react';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const Container = styled.div({
  height: '100vh',
});

export default function SearchMovies() {
  return (
    <Container>
      <Input />
      <Button>OK</Button>
    </Container>
  );
}
