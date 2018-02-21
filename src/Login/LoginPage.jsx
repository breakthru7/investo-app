import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';

class LoginPage extends Component {

    constructor(props){
        super(props); 

        //reset login status 
        this.props.dispatch(userActions.logout()); 

        this.state = {
            username : '' , 
            password : '' , 
            submitted : false 
        };


    }

    render(){

        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Login</h2>
                <form name="form">
                    <div className="form-group">
                        <button className="btn btn-primary">Login</button>

                        <Link to="/register" className="btn btn-link">Register</Link>
                    </div>
                </form>
            </div>
        );
    }

}

function mapStateToProps(state){
    const {loggingIn} = state.authentication; 
    return {
        loggingIn   
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export  {connectedLoginPage as LoginPage};

/* 
    Dev note : 
    - mapStateToProps is an implementation of Container part in Redux 
    - Container is actually part of the component that take piece of the state from store and pass it to component 
    - const {loggingIn , loggingOut } = state can be rewritten to 
        const loggingIn = state.loggingIn 
        const loggingOut = state.loggingOut

        - so const {loggingIn} = state.authentication;  can be written as 
          const loggingIn = state.authentication 
*/