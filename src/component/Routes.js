import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Measurement from './Measurement';

const Routes=()=>{
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route exact path='/measurement'>
                    <Measurement/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes