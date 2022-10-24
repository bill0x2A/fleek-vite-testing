import React from 'react';
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';
import Test from './Test';
import App from './App';

const Routes = () => {
    return <Router>
        <Route path='/test'>
            <Test />
        </Route>
        <Route path='/'>
            <App />
        </Route>
    </Router>
};

export default Routes;
