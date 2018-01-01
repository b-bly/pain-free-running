import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const url = 'http://localhost:5000/api';

class App extends Component {
  constructor() {
    super();
    this.state = {
      cats: [
        // {
        //   name: 'Jimmy',
        //   skill: 'shredding couches'
        // },
        // {
        //   name: 'Birtha',
        //   skill: 'running around at 3AM'
        // }
      ]
    };
    this.getCats = this.getCats.bind(this);
  }
  componentDidMount() {
    this.getCats();
  }
  getCats() {
    fetch(`${url}/cats`)
      .then(response => response.json())
      .then(responseArray => {
        console.log(`responseAray: `);
        console.log(responseArray);

        this.setState({
          cats: responseArray
        });

      }).catch(error => console.log(`Error with Fetch get cats: ${error}`));
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
