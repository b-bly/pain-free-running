import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//action
import postNewUser from '../actions/postUser';
import { Route, Redirect } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.postNewUser = this.postNewUser.bind(this);
    }
    postNewUser(event) {
        event.preventDefault();
        const target = event.target;
        const username = target.childNodes[0].childNodes[0].childNodes[2].value;
        const password = target.childNodes[0].childNodes[1].childNodes[2].value;
        const userInfo = {
            username: username,
            password: password
        };
        this.props.postNewUser(userInfo);
    }
    componentDidUpdate() {
        console.log('register did update, props: ');
        console.log(this.props);
        // if (this.props.users == 'success') {
        //     console.log(' success');
        //     this.setState((prevState, props) => {
        //         return {result: 'success'};
        //       });
        // }
    }

    render() {
        let registration = 'pending';
        if (this.props.users === 'success') {
            registration = 'success';
        } else if (this.props.users === 'fail') {
            registration = 'fail';
        }
        return (
           <div>
               <p>Register</p>
               {
                   registration == 'success' &&
                
                <Redirect to="/" />
               }
               {
                   registration == 'fail' &&
                <p>Registration failed.  Try again.</p>
               }
            {registration == 'pending' &&
            <div>
                

                <div className="container">
                    <div className="colums">
                        <form onSubmit={this.postNewUser}>
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
                                <button className="btn register" >Submit</button>
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
    console.log('Register.js mapStateToProps called, state: ');
    console.log(state);
    return {
        users: state.users //users is labeled in reducers/index.js
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        postNewUser: postNewUser //binds function imported above to the name that will be available in this.props,
        //so this.props.postNewUser
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);