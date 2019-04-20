import React from 'react';
import styled from 'styled-components';
import measures from '../../../infrastructure/styles/measures';
import colors from '../../../infrastructure/styles/colors';
import Typography from '@material-ui/core/Typography';
import MoviesItems from './MoviesItems';

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
});

const Border = styled.div({
  display: 'flex',
  flexFlow: 'row nowrap',
  justifyContent: 'center',
  borderBottom: `3px solid ${colors.mercury}`,
  height: measures.bottomCover - measures.unit(1) + 4,
  width: 'fit-content',
  margin: 'auto',
});

const Title = styled(function Title({ active, ...props }) {
  return <Typography {...props} />;
})(({ active }) => ({
  '&&': {
    cursor: !active ? 'pointer' : 'default',
    textTransform: 'uppercase',
    color: active ? colors.sunflower : colors.emperor,
    borderBottom: `3px solid ${active ? colors.sunflower : 'transparent'}`,

    padding: measures.unit(2),
    paddingTop: measures.unit(2),
    paddingBottom: measures.unit(1),
    margin: 'auto 0',

    '&:last-child': {
      marginRight: 0,
    },

    '&:hover': {
      color: !active ? 'black' : colors.sunflower,
      fontWeight: !active ? 500 : 'inherit',
    },
  },
}));

export default function Movies() {
  return (
    <Background>
      <Content>
        <Tabs>
          <Border>
            <Title active>Upcoming</Title>
            <Title>Search</Title>
          </Border>
        </Tabs>
        <MoviesItems />
      </Content>
    </Background>
  );
}