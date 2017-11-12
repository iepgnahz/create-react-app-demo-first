import React, {Component} from 'react';
import '../style/App.css';

import logo from '../image/logo.svg';
import ControlPanel from './ControPanel';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ControlPanel />
      </div>
    );
  }
}

export default App;
