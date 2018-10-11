import React from 'react';
import ListItem from './ListItem';

const ResultsList = (props) => {

  // componentWillReceiveProps(){
  //   if (props.allRecipes.length === 0){
  //     return(
  //       <div>Sorry but it seems we don't have that recipe.</div>
  //     )
  //   }
  // }
console.log(props.allRecipes);
  if (props.allRecipes.length === 0){
    return(
      <div id="ResultsList">
        No results have been found.
      </div>
    )
  } else {
    const allRecipes = props.allRecipes.map(r => <ListItem recipe={r} id={r.id} key={r.id}/>)
    console.log("allRecipes in ResultsList", allRecipes);
    return(
      <ol>{allRecipes}</ol>
    )
  }
  // if (props.displayedRecipes === []) {
  //   return(
  //     <div id="ResultsList">
  //       <ol id="RL-OL">
  //       </ol>
  //     </div>
  //   )
  // } else {
  //   for (let i = 0; i < props.displayedRecipes.length; i++){
  //     console.log("in the loop", i);
  //   }
  //   return(
  //     <div id="ResultsList">
  //       <ol id="RL-OL">
  //         <ListItem />
  //       </ol>
  //     </div>
  //   )
  // }
}


export default ResultsList;
