import React from 'react';

class ResultsList extends React.Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return(
      <div id="ResultsList">
        <ul id="RL-UL">
          <li><a href="#">Adele</a></li>
          <li><a href="#">Agnes</a></li>

          <li><a href="#">Billy</a></li>
          <li><a href="#">Bob</a></li>

          <li><a href="#">Calvin</a></li>
          <li><a href="#">Christina</a></li>
          <li><a href="#">Cindy</a></li>
        </ul>
      </div>
    )
  }
}

export default ResultsList;
