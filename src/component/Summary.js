import React, {Component} from 'react';

export default class Summary extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>summary:{this.props.summary}</p>
      </div>
    );
  }
}

