import React from 'react';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

class MasterContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      allRecipes: [],
      displayedRecipes: ["a", "b", "c"],
    }
  }

  componentDidMount() {
    fetch("https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/")
      .then(res => res.json())
      .then(json => this.setState({
        allRecipes: json.results}, () => console.log("goo", this.state.allRecipes)))
  }

  filterRecipes = () => {
    console.log('fetching...');
    // WRITTEN TO ATTEMPT A LOCAL CHECK INSTEAD OF HITTING TH API EVERYTIME
    // let searchWord = this.state.searchTerm
    // debugger
    // if (this.state.allRecipes.includes(searchWord)) {
    //   let filteredRecipes = this.state.allRecipes.filter(recipe => recipe.title.toLowerCase().includes(searchWord.toLowerCase()))
    //   this.setState({
    //     displayedRecipes: filteredRecipes
    //   })
    // } else {
      // console.log("gotta fetch it from the API");
    // }



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
        <ResultsList displayedRecipes={this.state.displayedRecipes}/>




      </div>
    )
  }

}

export default MasterContainer;
