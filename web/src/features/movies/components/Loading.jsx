import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import colors from '../../../infrastructure/styles/colors';
import styled from 'styled-components';

const Container = styled.div({
  '&&': {
    margin: '0 auto',
  },
});

export default function Loading() {
  const css = `
    && {
      color: ${colors.light.hawaiianTan};
    }
  `;
  return (
    <Container>
      <CircularProgress css={css} />
    </Container>
  );
}
