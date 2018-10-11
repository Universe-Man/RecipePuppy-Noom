import React from 'react';
import ListItem from './ListItem';

const ResultsList = (props) => {
  if (props.allRecipes.length === 0){
    return(
      <div>Sorry but it seems we don't have that recipe.</div>
    )
  } else {
    const allRecipes = props.allRecipes.map(r => <ListItem recipe={r}/>)
    console.log(allRecipes);
    return(
      <div>Oh nose!</div>
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
