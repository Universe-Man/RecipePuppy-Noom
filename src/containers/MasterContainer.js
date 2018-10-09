import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

class MasterContainer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div id="MasterContainer">
        <SearchBar />
        <ResultsList />




      </div>
    )
  }

}

export default MasterContainer;
