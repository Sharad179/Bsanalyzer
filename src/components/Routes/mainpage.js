"use strict"

import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';
import UploadPage from '../UploadPage/UploadPage';
import ResultPage from '../ResultPage/ResultPage';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';


export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                
                <Route path="/result" component={ResultPage} />
                <Route path="/upload" component={UploadPage} />
                
            </div>
        )
    }
}
