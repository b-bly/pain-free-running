import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
//action
import postNewUser from '../actions/postUser';

class Register extends Component {
    constructor(props) {
        super(props);
        this.postNewUser = this.postNewUser.bind(this);
    }
    postNewUser() {
        const userInfo = {
            username: 'eddy',
            password: 'eddy'
        };
        this.props.postNewUser(userInfo);
    }
    render() {
        return (
        <div>
            <p>Register</p>
            <button className="btn"
                onClick={this.postNewUser}>Submit</button>
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