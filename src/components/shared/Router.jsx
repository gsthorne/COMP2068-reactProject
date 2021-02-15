import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Data from '../data/Data';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/data" component={Data} />
        </Switch>
    );
}
 
export default Router;