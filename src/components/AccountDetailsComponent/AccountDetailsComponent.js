import React from 'react';
import "./AccountDetailsComponent.css";
import ResponsiveCards from "../ResponsiveCards/ResponsiveCards";

export default class AccountDetailsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { tabledatadebits: [], tabledatacredits: [], tableHeaders: [], headersfeeandsurcharge: [], datafeeandsurcharge: [], tabledataavgbalance: [] }
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
            _this.setState({ tabledatadebits: _this.deleteRow(body["DebitDetails"], 1), tabledatacredits: _this.deleteRow(body["CreditDetails"], 1), tabledataavgbalance: _this.deleteRow(body["AvgBalance"], 1), tableHeaders: [body["CreditDetails"][0]], headersfeeandsurcharge: [body["feeAndCharges"][0]], datafeeandsurcharge: _this.deleteRow(body["feeAndCharges"], 1) })
        });
    }
    render() {
        return (
            <div className ="container-fluid">
                <div className="row" style={{ marginTop: "40px", marginLeft: "15px", marginRight: "15px" }}>
                    <div className="col-md-12">
                        <div className="card card-cascade narrower">


                            <div className="view view-cascade py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">



                                <a href="" className="white-text mx-3">Total Credits (in Rs.)</a>



                            </div>

                            <div className="card-body">

                                <div className="table-responsive">

                                    <table className="table table-hover" style={{ overflow: "auto" }}>
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

                    </div>
                </div>
                <div className="row" style={{ marginTop: "40px", marginLeft: "15px", marginRight: "15px" }}>
                    <div className="col-md-12">
                        <div className="card card-cascade narrower">


                            <div className="view view-cascade py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">



                                <a href="" className="white-text mx-3">Total Debits (in Rs.)</a>



                            </div>

                            <div className="card-body">

                                <div className="table-responsive">
                                    <table className="table table-hover" style={{ height: "100%", overflowY: "scroll" }}>
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
                </div>


                <div className="row" style={{ marginTop: "40px", marginLeft: "15px", marginRight: "15px" }}>
                    <div className="col-md-12">
                        <div className="card card-cascade narrower">


                            <div className="view view-cascade py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">



                                <a href="" className="white-text mx-3">Average Balance (in Rs.)</a>



                            </div>

                            <div className="card-body">

                                <div className="table-responsive">
                                    <table className="table table-hover" style={{ height: "100%", overflowY: "scroll" }}>
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
                                            {this.state.tabledataavgbalance.map((head, index) => {
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
                </div>
                <div className="row" style={{ marginTop: "40px", marginLeft: "15px", marginRight: "15px",marginBottom:"40px" }}>
                    <div className="col-md-12">
                        <div className="card card-cascade narrower">


                            <div className="view view-cascade py-3 gradient-card-header info-color-dark mx-4 d-flex justify-content-between align-items-center">



                                <a href="" className="white-text mx-3">Fee and Charges (in Rs.)</a>



                            </div>

                            <div className="card-body">

                                <div className="table-responsive">
                                    {this.state.datafeeandsurcharge.length != 0 ? <table className="table table-hover" style={{ height: "100%", overflowY: "scroll" }}>
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
            </div >

        );
    }
}
