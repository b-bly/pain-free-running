import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor () {
  super();
  this.state = {
    cats: [
      {name: 'Jimmy',
      skill: 'shredding couches'},
      {
        name: 'Birtha',
        skill: 'running around at 3AM'
      }
    ]
  }
}
  render() {
//    change key to cat.id
    const catsList = this.state.cats.map((cat, i) => 
    
      <li key={i.toString()}>
        Name: {cat.name} &nbsp
        Skill: {cat.skill}
      </li> 
      
    )

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <ol>{catsList}</ol>
        </div>
      </div>
    );
  }
}

export default App;
