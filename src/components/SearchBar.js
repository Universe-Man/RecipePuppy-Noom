import React from 'react';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div id="SearchBar">
        <form>
           <input id='search-input' type='text' placeholder='Search for Recipes' autoFocus='autofocus' onChange={this.props.getSearchTerm}/>
        </form>
      </div>
    )
  }
}

export default SearchBar;
