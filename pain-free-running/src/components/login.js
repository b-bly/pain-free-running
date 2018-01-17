import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//action
import login from '../actions/login';
//routing
import { Route, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
    }
    login(event) {
        event.preventDefault();
        const target = event.target;
        const username = target.childNodes[0].childNodes[0].childNodes[2].value;
        const password = target.childNodes[0].childNodes[1].childNodes[2].value;
        const userInfo = {
            username: username,
            password: password
        };
        this.props.login(userInfo);
    }
    componentDidUpdate() {
        console.log('login did update, props: ');
        console.log(this.props);
        // if (this.props.users == 'success') {
        //     console.log(' success');
        //     this.setState((prevState, props) => {
        //         return {result: 'success'};
        //       });
        // }
    }

    render() {
        console.log('props users login: ', this.props.users);
        let loginStatus = 'pending';
        if (this.props.users === 'success') {
            loginStatus = 'success';
        } else if (this.props.users === 'fail') {
            loginStatus = 'fail';
        }
        return (
           <div>
               <p>Register</p>
               {
                   loginStatus == 'success' &&
                
                <Redirect to="/" />
               }
               {
                   loginStatus == 'fail' &&
                <p>loginStatus failed.  Try again.</p>
               }
            {loginStatus == 'pending' &&
            <div>
                

                <div className="container">
                    <div className="colums">
                        <form onSubmit={this.login}>
                            <div className="col-6 col-mx-auto form">

                                <div className="register input-group">
                                    <label className="form-label "> Username: </label>
                                    &nbsp; 
                                    <input className="form-input" type="text" />
                                </div >
                                <div className="register input-group">
                                    <label className="form-label">Password:</label>
                                    &nbsp;
                                    <input className="form-input" type="password" name="password" />
                                </div>
                                <button className="btn register" >Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
            
            }
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log('Login.js mapStateToProps called, state: ');
    console.log(state);
    return {
        users: state.users //users is labeled in reducers/index.js
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        login: login //binds function imported above to the name that will be available in this.props,
        //so this.props.postNewUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);