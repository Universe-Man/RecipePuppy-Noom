import React from 'react';

class ResultsList extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div id="ResultsList">
        <ol id="RL-OL">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          {/*<li><a href="#">Cindy</a></li>*/}
        </ol>
      </div>
    )
  }
}

export default ResultsList;
