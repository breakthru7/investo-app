import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form">
                    
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        
                        <Link to="/login" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };