import React from 'react';
import { render } from 'react-dom';
// import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import MainPage from './components/Routes/mainpage';
import { history } from './components/helpers/history';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';


const Routes = (
    
        <BrowserRouter history = {history}>
            <Switch>
                <MainPage></MainPage>
            </Switch>
        </BrowserRouter>
    
);
render(
    Routes,
    document.getElementById('app')
);