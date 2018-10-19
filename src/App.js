import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Messages from './components/Messages'

class App extends Component {
  constructor(){
    super()

    this.state = {

    }
  }


  render() {
    return (
      <div className="App">
        <Header />
        <div className='border'>
          <Messages />
        </div>
      </div>
    );
  }
}

export default App;
