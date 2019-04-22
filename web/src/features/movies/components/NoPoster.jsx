import React from 'react';
import Photo from '@material-ui/icons/Photo';

export default function NoPoster() {
  return (
    <div css="width: 185px; height: 277px; background: #dbdbdb; display: flex;">
      <Photo color="disabled" css="&& { font-size: 92px; margin: auto }" />
    </div>
  );
}
