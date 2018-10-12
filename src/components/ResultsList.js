import React from 'react';
import ListItem from './ListItem';

const ResultsList = (props) => {

  if (props.filteredRecipes.length === 0) {
    return(
      <div id="ResultsList">
        <br></br>
        No results have been found.
      </div>
    )
} else {
    const filteredRecipes = props.filteredRecipes.map(r => <ListItem recipe={r} id={r.id} key={r.id}/>)
    return(
      <div id="ResultsList">
        <ol id="RL-OL">
          {filteredRecipes}
        </ol>
      </div>
    )
  }
}

export default ResultsList;
