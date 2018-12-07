import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../Footer/Footer.css';


export default class Footer extends React.Component {

    render() {
        const { user, users } = this.props;
        return (
            <div>
                 <div className="container-fluid footer_part text-center">
                    <p className="copy_text">© Copyrights Retra Ventures Pvt. Ltd.</p>
                </div>
            </div>

        );
    }
}


