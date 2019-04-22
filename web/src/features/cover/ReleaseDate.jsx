import React from 'react';
import { observer } from 'mobx-react';
import moviesStore from '../../infrastructure/stores/moviesStore';
import parse from 'date-fns/parse';
import { format } from 'date-fns';
import colors from '../../infrastructure/styles/colors';
import Text from '../../infrastructure/Text';

export default observer(function ReleaseDate() {
  const css = `
    && {
      color: ${colors.dark.tahitiGold}
    }
  `;
  return (
    <Text variant="caption" css={css}>
      {format(parse(moviesStore.getFirstMovie().release_date), 'D MMM, YYYY')}
    </Text>
  );
});
