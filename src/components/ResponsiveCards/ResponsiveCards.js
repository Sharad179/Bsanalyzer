import React from 'react';
import "./ResponsiveCards.css";
export default class ResponsiveCards extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className="our-team">
                    <div className="pic">
                        <img src={require('../../../public/images/checking-easy-illustration.png')}></img>
                    </div>

                    <div className="team-content">
                        <h3 className="title">{this.props.accountnumber}</h3>
                        <span className="post">Account Number</span>
                    </div>
                    <div className="team-content">
                        <h3 className="title">{this.props.micrcode}</h3>
                        <span className="post">MICR Code</span>
                    </div>
                    <div className="team-content">
                        <h3 className="title">{this.props.neftcode}</h3>
                        <span className="post">NEFT Code</span>
                    </div>
                   
                </div>

            </div>

        );
    }
}
