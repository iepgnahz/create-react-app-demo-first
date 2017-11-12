import React, {Component} from "react";
import "../style/index.css";

export default class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue || 0
    };
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleSubClick = this.handleSubClick.bind(this);
  }

  handleAddClick() {
    this.setState({
      count: this.state.count + 1
    });

    this.props.updateSummary(1);
  }


  handleSubClick() {
    this.setState({
      count: this.state.count - 1
    });
    this.props.updateSummary(-1);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddClick}>+</button>
        <button onClick={this.handleSubClick}>-</button>
        <div>
          Click Count: {this.state.count}
        </div>
      </div>
    )
  }
}