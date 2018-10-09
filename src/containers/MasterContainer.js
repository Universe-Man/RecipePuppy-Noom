import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

class MasterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
    }
  }

  getSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return(
      <div id="MasterContainer">
        <h1>WELCOME TO RECIPE PUPPY!!</h1>
        <SearchBar getSearchTerm={this.getSearchTerm} />
        <ResultsList />




      </div>
    )
  }

}

export default MasterContainer;
