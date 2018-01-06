import React, { Component } from 'react';
//Redux
import {connect} from 'react-redux';
import {bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
//components
import  InjuryList  from './components/injury-list';
import InjuryInfo from './components/injuryInfo';

//images
import logo from './logo.svg';
//style
import './App.css';

//const url = 'http://localhost:5000/api';

export default class App extends Component {
  constructor(props) {
    super(props);
    
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
    
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <InjuryList />
          <InjuryInfo />
        </div>
      </div>
    );
  }
}


//injury list page
  //select injury
  //add injury
  //search by injury name, pain location (muscle), keyword
//injury page 
  //injury name
  //helpful treatments description (title?)
  //upvote treatments button
  //add to myTreatments