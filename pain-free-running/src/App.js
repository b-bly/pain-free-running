import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

//components
import InjuryList from './components/injury-list';
import InjuryInfo from './components/injury-info';
import Register from './components/register';

//images
import logo from './logo.svg';
//style
import './App.css';

//const url = 'http://localhost:5000/api';

export default class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   <div className="App-intro">
      //     <InjuryList />
      //     <InjuryInfo />
      //   </div>
      // </div>

      <Router>
        <div className="App">
          <header className="App-header">
          
            <div>
              <img src={logo} className="App-logo" alt="logo" />
              </div>
              <div>
              <h1 className="App-title">Pain Free Running</h1>
            </div>
            <div>
              <button className="button-menu" aria-label="menu"><i className="icon icon-menu"></i></button>
            </div>
          </header>
          <div className="App-intro">
          <Register />
            <Switch>
              {/* don't forget EXACT!!! */}
              <Route exact path="/" component={InjuryList} />
              <Route path="/injury-info" component={InjuryInfo} />
            </Switch>
          </div>
        </div >
      </Router >

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
