import React from 'react';

const SearchBar = (props) => {

  return(
    <div id="SearchBar">
      <form>
         <input id='search-input' type='text' placeholder='Search for Recipes' autoFocus='autofocus' onChange={props.getSearchTerm}/>
      </form>
    </div>
  )
}

export default SearchBar;
