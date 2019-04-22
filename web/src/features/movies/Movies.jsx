import React, { useCallback } from 'react';
import styled from 'styled-components';
import measures from '../../infrastructure/styles/measures';
import colors from '../../infrastructure/styles/colors';
import Typography from '@material-ui/core/Typography';
import DetailsDialog from './Details';
import tabsStore, {
  UPCOMING,
  SEARCH,
} from '../../infrastructure/stores/tabsStore';
import { Observer } from 'mobx-react';
import SearchMovies from '../search/SearchMovies';
import UpcomingMovies from './UpcomingMovies';

const Background = styled.div({
  background: colors.concrete,
  position: 'relative',
});

const Content = styled.div({
  background: colors.concrete,
  maxWidth: measures.content,
  margin: 'auto',
  position: 'absolute',
  top: -measures.bottomCover,
  left: 0,
  right: 0,
});

const Tabs = styled.div({
  background: colors.concrete,
  height: measures.bottomCover + measures.unit(2),
  position: 'sticky',
  top: 0,
  zIndex: 1,
});

const Border = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  borderBottom: `3px solid ${colors.mercury}`,
  height: measures.bottomCover,
  width: 'fit-content',
  margin: 'auto',
});

const Title = styled(function Title({ active, ...props }) {
  return <Typography {...props} />;
})(({ active }) => ({
  '&&': {
    cursor: !active ? 'pointer' : 'default',
    textTransform: 'uppercase',
    color: active ? colors.light.hawaiianTan : colors.emperor,
    borderBottom: `3px solid ${
      active ? colors.light.hawaiianTan : 'transparent'
    }`,

    padding: measures.unit(2),
    paddingTop: measures.unit(2),
    paddingBottom: measures.unit(1),
    margin: 'auto 0',

    '&:last-child': {
      marginRight: 0,
    },

    '&:hover': {
      color: colors.light.hawaiianTan,
    },
  },
}));

export default function Movies() {
  const handleUpcomingClick = useCallback(() => {
    tabsStore.setSelectedTab(UPCOMING);
  });
  const handleSearchClick = useCallback(() => {
    tabsStore.setSelectedTab(SEARCH);
  });
  return (
    <Background>
      <Content>
        <Tabs>
          <Border>
            <Observer>
              {() => (
                <Title
                  active={tabsStore.selectedTab === UPCOMING}
                  onClick={handleUpcomingClick}
                >
                  Upcoming
                </Title>
              )}
            </Observer>
            <Observer>
              {() => (
                <Title
                  active={tabsStore.selectedTab === SEARCH}
                  onClick={handleSearchClick}
                >
                  Movies
                </Title>
              )}
            </Observer>
          </Border>
        </Tabs>
        <Observer>
          {() => tabsStore.selectedTab === UPCOMING && <UpcomingMovies />}
        </Observer>
        <Observer>
          {() => tabsStore.selectedTab === SEARCH && <SearchMovies />}
        </Observer>
      </Content>

      <DetailsDialog />
    </Background>
  );
}
