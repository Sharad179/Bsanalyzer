import React from 'react';
// import { Link } from 'react-router-dom';

import './TopNav.scss';


export default class TopNav extends React.Component {
    
    render() {
        const { user, users } = this.props;
        return (
            <div>
                <nav className="navbar navbar-default navar_mystyle">
                    <div className="container">
                        <div className="navbar-header ">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"
                                aria-controls="navbar">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">
                                <img src="./images/logo.png" className="img-responsive logo_style" />
                            </a>
                        </div>
                        <div id="navbar" className="navbar-collapse collapse navigation_style ">
                           
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

