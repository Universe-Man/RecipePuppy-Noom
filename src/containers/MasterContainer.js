import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

class MasterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      allRecipes: [],
      // displayedRecipes: ["a", "b", "c"],
    }
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
      .then(res => res.json())
      .then(json => this.setState({
        allRecipes: json.results}, () => console.log("goo", this.state.allRecipes)))
  }

  filterRecipes = () => {

  }

  getSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, () => {setTimeout(this.filterRecipes, 500)})
  }


  render() {
    return(
      <div id="MasterContainer">
        <h1>WELCOME TO RECIPE PUPPY!!</h1>
        <SearchBar getSearchTerm={this.getSearchTerm} />
        <ResultsList allRecipes={this.state.allRecipes}/>




      </div>
    )
  }

}

export default MasterContainer;
