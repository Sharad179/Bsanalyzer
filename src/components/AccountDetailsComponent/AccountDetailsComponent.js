import React from 'react';
import "./AccountDetailsComponent.css";
import ResponsiveCards from "../ResponsiveCards/ResponsiveCards";

export default class AccountDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tabledatadebits: [], tabledatacredits: [], tableHeaders: [], headersfeeandsurcharge: [], datafeeandsurcharge: [],tabledataavgbalance: []  }
    }
    deleteRow(arr, row) {
        arr = arr.slice(0); // make copy
        arr.splice(row - 1, 1);
        return arr;
    }
    componentDidMount() {
        var _this = this;
        const accountnumber = localStorage.getItem('accountNumber');
        fetch('http://13.233.180.15/app/accountDetails?accountNo=' + accountnumber, {
            method: 'GET'
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            _this.setState({ tabledatadebits: _this.deleteRow(body["DebitDetails"], 1), tabledatacredits: _this.deleteRow(body["CreditDetails"], 1),tabledataavgbalance: _this.deleteRow(body["AvgBalance"], 1), tableHeaders: [body["CreditDetails"][0]], headersfeeandsurcharge: [body["feeAndCharges"][0]], datafeeandsurcharge: _this.deleteRow(body["feeAndCharges"], 1) })
        });
    }
    render() {
        return (
            <div>
                <div className="row" style={{ marginTop: "40px", marginLeft: "15px", marginRight: "15px" }}>
                    <div className="col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading"><h4>Total Credits (in Rs.)</h4></div>
                            <div className="panel-body">
                                <table className="table" style={{ overflow: "auto" }}>
                                    <thead>

                                        {this.state.tableHeaders.map((head, index) => {
                                            return <tr key={index}>

                                                {head.map((cell, index) => {
                                                    return (
                                                        <th key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</th>
                                                    );
                                                })}


                                            </tr>
                                        }
                                        )}
                                    </thead>
                                    <tbody>
                                        {this.state.tabledatacredits.map((head, index) => {
                                            return <tr key={index}>
                                                {head.map((cell, index) => {
                                                    return (
                                                        <td key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</td>
                                                    );
                                                })}
                                            </tr>
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="panel panel-primary">
                            <div className="panel-heading"><h4>Total Debits (in Rs.)</h4></div>
                            <div className="panel-body">
                                <table className="table" style={{ height: "100%", overflowY: "scroll" }}>
                                    <thead>

                                        {this.state.tableHeaders.map((head, index) => {
                                            return <tr key={index}>

                                                {head.map((cell, index) => {
                                                    return (
                                                        <th key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</th>
                                                    );
                                                })}


                                            </tr>
                                        }
                                        )}
                                    </thead>
                                    <tbody>
                                        {this.state.tabledatadebits.map((head, index) => {
                                            return <tr key={index}>
                                                {head.map((cell, index) => {
                                                    return (
                                                        <td key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</td>
                                                    );
                                                })}
                                            </tr>
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading"><h4>Average Balance (in Rs.)</h4></div>
                            <div className="panel-body">
                                <table className="table" style={{ height: "100%", overflowY: "scroll" }}>
                                    <thead>

                                        {this.state.tableHeaders.map((head, index) => {
                                            return <tr key={index}>

                                                {head.map((cell, index) => {
                                                    return (
                                                        <th key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</th>
                                                    );
                                                })}


                                            </tr>
                                        }
                                        )}
                                    </thead>
                                    <tbody>
                                        { this.state.tabledataavgbalance.map((head, index) => {
                                            return <tr key={index}>
                                                {head.map((cell, index) => {
                                                    return (
                                                        <td key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</td>
                                                    );
                                                })}
                                            </tr>
                                        }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row" style={{ marginLeft: "10px", marginRight: "10px" }}>
                    <div className="col-md-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading"><h4>Fee and Charges (in Rs.)</h4></div>
                            <div className="panel-body">
                                {this.state.datafeeandsurcharge.length != 0 ? <table className="table" style={{ height: "100%", overflowY: "scroll" }}>
                                    <thead>

                                        {this.state.datafeeandsurcharge.length != 0 ? this.state.headersfeeandsurcharge.map((head, index) => {
                                            return <tr key={index}>

                                                {head.map((cell, index) => {
                                                    return (
                                                        <th key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</th>
                                                    );
                                                })}


                                            </tr>
                                        }
                                        ) : <tr><th style={{ textAlign: "center" }}>No Data Found</th></tr>}
                                    </thead>
                                    <tbody>
                                        {this.state.datafeeandsurcharge.length != 0 ? this.state.datafeeandsurcharge.map((head, index) => {
                                            return <tr key={index}>
                                                {head.map((cell, index) => {
                                                    return (
                                                        <td key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</td>
                                                    );
                                                })}
                                            </tr>
                                        }
                                        ) : <tr><th></th></tr>}
                                    </tbody>
                                </table> : <h5 style={{ textAlign: "center" }}>No Data Found</h5>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
