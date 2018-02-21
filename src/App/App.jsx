import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { PrivateRoute } from '../_components'

class App extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
            return (
                <div className="jumbotron">
                    <div className="container">
                        <div className="col-sm-8 col-sm-offset-2">
                            
                            <Router history={history}>
                                <div>
                                    <PrivateRoute exact path="/" component={HomePage} />
                                    <Route path="/login" component={LoginPage} />
                                    <Route path="/register" component={RegisterPage} />
                                </div>
                            </Router>
                        </div>
                    </div>
                </div>
            );
    }
}

//take piece of data(state) from the store and pass it to the component as props 
function mapStateToProps(state) {

    //alert is part of the data from the store 
    const { alert } = state;
    return {
        alert
    };
}

//export the App which is already connected to the store and using alert 
const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 

/*-- dev notes --
- this is the main Application 
- mapStateToProps is the CONTAINER part of Redux to connect store and components 
- exporting App as a 'named export' (without default) , imported with exact name {App}
----*/