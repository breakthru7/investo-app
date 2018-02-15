import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; 
import { App } from './App';
import { store } from './_helpers'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = { store }>
        <App />
    </Provider>, 
    document.getElementById('root')

);

registerServiceWorker();

/*-- dev notes --
- this is the entry point to the app



----*/