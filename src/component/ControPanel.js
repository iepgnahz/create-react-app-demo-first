import React, {Component} from 'react';
import ClickCounter from './ClickCounter';
import Summary from './Summary';
export default class ControlPanel extends Component {

  constructor(props) {
    super(props);
    this.state={
      summary: 30
    }
  }

  handleClick() {
    window.location.reload();
  }

  updateSummary(changedValue){
    this.setState({
      summary: this.state.summary + changedValue
    })
  }

  render() {
    return (
      <div>
        <ClickCounter caption="first" initialValue={0} updateSummary={this.updateSummary.bind(this)}/>
        <ClickCounter caption="second" initialValue={10} updateSummary={this.updateSummary.bind(this)}/>
        <ClickCounter caption="third" initialValue={20} updateSummary={this.updateSummary.bind(this)}/>
        <button onClick={this.handleClick.bind(this)}>click me to re-render~</button>
        <Summary summary={this.state.summary}/>
      </div>
    );
  }
}

