import React from 'react';

const ListItem = (props) => {

  return(
    <li>
      <img src={props.recipe.thumbnail}></img>
      <h2>{props.recipe.title}</h2>
      <a href={props.recipe.href} target="_blank">Choose Recipe</a>
      <p>{props.recipe.ingredients}</p>
    </li>
  )  
}

export default ListItem;
