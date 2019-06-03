import React, { Component } from 'react';
import CounterContainer from './CounterContainer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div className='App'>
        <CounterContainer />
      </div>
     );
  }
}
 
export default App;