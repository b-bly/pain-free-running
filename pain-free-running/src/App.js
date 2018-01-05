import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//actions
import getCats from './actions/get_cats'
import logo from './logo.svg';
import './App.css';

//const url = 'http://localhost:5000/api';

class App extends Component {
  constructor() {
    super();
    this.state = {cats: []};
    // this.state = {
    //   cats: [
    //     {
    //       name: 'No',
    //       skill: 'not working yet'
    //     }
    //   ]
    // };
  }
  componentWillMount() {
    this.props.getCats();
  }

  render() {
    //    TO DO: change key to cat.id
    
    const catsList = this.props.cats.map((cat, i) =>

      <li key={i.toString()}>
        Name: {cat.name}  Skill: {cat.skill}
      </li>

    )
    console.log('render state: ');
    console.log(this.state);
    console.log('render props: ');
    console.log(this.props);
    

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

App.propTypes = {
  cats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number, name: PropTypes.string, skill: PropTypes.string }))

}

function mapStateToProps(state) {
  console.log('mapStateToProps called, state: ');
  console.log(state);
  
  return {
    cats: state.cats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCats: getCats
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//injury list page
  //select injury
  //add injury
  //search by injury name, pain location (muscle), keyword
//injury page 