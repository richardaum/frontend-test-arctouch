import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../../infrastructure/stores/moviesStore';
import Text from '../../../infrastructure/components/Text';
import parse from 'date-fns/parse';
import { format } from 'date-fns';
import colors from '../../../infrastructure/styles/colors';

export default observer(function ReleaseDate() {
  const css = `
    && {
      color: ${colors.sunflower}
    }
  `;
  return (
    <Text variant="caption" css={css}>
      {format(parse(moviesStore.getFirstMovie().release_date), 'D MMM, YYYY')}
    </Text>
  );
});
