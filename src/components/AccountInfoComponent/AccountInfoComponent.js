import React from 'react';
import "./AccountInfoComponent.css";
import ResponsiveCards from "../ResponsiveCards/ResponsiveCards";
export default class AccountInfoComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { accountNumber: "", micrcode: "", neftcode: "" }
    }
    componentDidMount() {
        var _this = this;
         const accountnumber = localStorage.getItem('accountNumber');
        fetch('http://13.233.180.15/app/account?accountNo=' + accountnumber, {
            method: 'GET'
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            _this.setState({ accountNumber: body.AccountNo, micrcode: body.MICRCode, neftcode: body.NEFTCode })

        });
    }
    render() {
        return (
            <div>
                <div className="row" style={{ marginTop: "40px" }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card-counter info">
                                    <i className="fa fa-bank"></i>
                                    <span className="count-numbers">{this.state.accountNumber}</span>
                                    <span className="count-name">Account Number</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card-counter danger">
                                    <i className="fa fa-inr"></i>
                                    <span className="count-numbers">{this.state.micrcode}</span>
                                    <span className="count-name">MICR Code</span>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card-counter success">
                                    <i className="fa fa-credit-card custom"></i>
                                    <span className="count-numbers">{this.state.neftcode}</span>
                                    <span className="count-name">NEFT Code</span>
                                </div>
                            </div>


                        </div>
                    </div>
                    {/* <div className="col-md-4 col-md-offset-4">
                         <ResponsiveCards accountnumber={this.state.accountNumber} micrcode={this.state.micrcode} neftcode={this.state.neftcode} ></ResponsiveCards>
                    </div> */}
                </div>
            </div>

        );
    }
}
