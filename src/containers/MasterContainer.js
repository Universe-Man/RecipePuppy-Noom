import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

class MasterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      allRecipes: [],
      filteredRecipes: [],
    }
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
      .then(res => res.json())
      .then(json => this.setState({
        allRecipes: json.results}))
  }

  filterRecipes = () => {
    let allTheRecipes = this.state.allRecipes
    let filteredRecipes = allTheRecipes.filter(recipe => recipe.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    this.setState({
      filteredRecipes: filteredRecipes
    })
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
        <ResultsList filteredRecipes={this.state.filteredRecipes}/>




      </div>
    )
  }

}

export default MasterContainer;
