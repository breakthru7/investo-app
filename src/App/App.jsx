import React from 'react';
import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends React.Component
{
    constructor(props){
        super(props);
    }

    render(){
            return (
                <div>Login here</div>
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
- exporting App as a 'named export' (without default) , imported with {App}
----*/