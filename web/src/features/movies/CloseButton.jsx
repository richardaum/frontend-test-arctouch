import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { css } from 'styled-components';
import measures from '../../infrastructure/styles/measures';
import detailsStore from '../../infrastructure/stores/detailsStore';

const closeButtonStyle = css`
  && {
    position: absolute;
    top: ${measures.unit(2)}px;
    right: ${measures.unit(2)}px;
    color: white;
  }
`;

export default function CloseButton() {
  const handleClick = useCallback(() => {
    detailsStore.setSelectedMovieId(null);
  });
  return (
    <Button css={closeButtonStyle} onClick={handleClick}>
      Close
    </Button>
  );
}
