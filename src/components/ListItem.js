import React from 'react';

class ListItem extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    console.log("LOOK AT ME", this.props.recipe);
    return(
      <li>
        <img src={this.props.recipe.href}></img>
        <h2>{this.props.recipe.title}</h2>
        <p>{this.props.recipe.ingredients}</p>

      </li>
    )
  }
}

export default ListItem;
