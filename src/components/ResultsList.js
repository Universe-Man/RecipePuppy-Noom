import React from 'react';

const ResultsList = (props) => {

  console.log("this is props in the results list", props.displayedRecipes);
  // displayStuff = () => {
  //
  // }
  if (props.displayedRecipes === []) {
    return(
      <div id="ResultsList">
        <ol id="RL-OL">
        </ol>
      </div>
    )
  } else {
    for (let i = 0; i < props.displayedRecipes.length; i++){
      console.log("in the loop", i); 
    }
    return(
      <div id="ResultsList">
        <ol id="RL-OL">
          {props.displayedRecipes}
        </ol>
      </div>
    )
  }
}


export default ResultsList;
