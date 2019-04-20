import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Text(props) {
  const css = `
    && {
      color: white;
    }
  `;
  return <Typography css={css} {...props} />;
}
