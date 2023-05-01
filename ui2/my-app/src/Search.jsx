import React, { Component } from 'react';
import debounce from 'lodash.debounce';
import { SearchContext } from './App';

function Search() {
  const [value, setValue] = React.useState('');
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const updateSearchValue = React.useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 900),
    [],
  );
  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  return (
    <input
      value={value}
      onChange={(event) => onChangeInput(event)}
      className="search"
      placeholder="Search..."
    />
  );
}
export default Search;
