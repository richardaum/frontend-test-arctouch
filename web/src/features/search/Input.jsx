import React, { useCallback } from 'react';
import MuiInput from '@material-ui/core/Input';
import styled from 'styled-components';
import searchStore from '../../infrastructure/stores/searchStore';
import { Observer } from 'mobx-react';
import debounce from 'lodash/debounce';

export const InputContainer = styled.div({
  margin: '0 auto auto auto',
});

const doSearch = debounce(function doSearch() {
  searchStore.setIsLoadingVisible(true);
  searchStore.search();
}, 300);

const Input = styled(function Input(props) {
  const handleChange = useCallback(e => {
    searchStore.setQuery(e.target.value);
    doSearch();
  });
  return (
    <Observer>
      {() => (
        <MuiInput
          placeholder="Search for a movie"
          value={searchStore.query}
          onChange={handleChange}
          {...props}
        />
      )}
    </Observer>
  );
})({ margin: '0 auto auto auto', cursor: 'text' });

export default Input;
