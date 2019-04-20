import React from 'react';
import measures from '../../../infrastructure/styles/measures';
import moviesStore from '../../../infrastructure/stores/moviesStore';
import Text from '../../../infrastructure/components/Text';

export default function Overview() {
  const css = `
    && {
      margin-top: ${measures.unit(3)}px
    }
  `;
  return (
    <Text variant="body1" css={css}>
      {moviesStore.getFirstMovie().overview}
    </Text>
  );
}
