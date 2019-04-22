import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Cover from '../cover/Cover';
import Movies from '../../movies/components/Movies';

const Container = styled.div({
  height: 0,
  minHeight: '100%',
});

function Home() {
  return (
    <Container>
      <Cover />
      <Movies />
    </Container>
  );
}

export default observer(Home);
