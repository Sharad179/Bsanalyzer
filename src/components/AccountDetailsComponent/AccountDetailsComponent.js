import React from 'react';
import "./AccountDetailsComponent.css";
import ResponsiveCards from "../ResponsiveCards/ResponsiveCards";

export default class AccountDetailsComponent extends React.Component {
    getDateFormat(monthyear, day) {
        return monthyear.substring(0, 4) + "-" + monthyear.substring(4, 6) + "-" + day;
    }
    getHeadersFeeAndCharges(){
        return [["SL No.","DATE","DESCRIPTION","DEBIT","BALANCE"]];
    }
    getDataFeeAndCharges(jsondata){
        var finalArray = [];
        if(jsondata){
            for(var i=0;i<jsondata.length;i+1){
                var rowArray = [];
                rowArray.push(i+1);
                rowArray.push(jsondata[i]["yearMonth"]);
                rowArray.push(jsondata[i]["description"]);
                rowArray.push(jsondata[i]["debit"]);
                rowArray.push(jsondata[i]["balance"]);
                finalArray.push[rowArray];
            }
        }
        return finalArray;
    }
    getTableHeader(jsondata) {
        var finalArray = [];
        var firstrowArray = ["Days of Months"]
        const keysOfArray = Object.keys(jsondata);
        for (var months = 0; months < keysOfArray.length; months++) {
            firstrowArray.push(keysOfArray[months]);
        }
        finalArray.push(firstrowArray);
        return finalArray;

    }
    getTableData(jsondata, type) {
        var finalArray = [];
        const keysOfArray = Object.keys(jsondata);
        for (var i = 1; i <= 31; i++) {

            i = i.toString();
            i = i.length == 2 ? i : "0" + i
            var rowArray = [i]
            for (var months = 0; months < keysOfArray.length; months++) {
                var tabentry = jsondata[keysOfArray[months]][this.getDateFormat(keysOfArray[months], i)] ? jsondata[keysOfArray[months]][this.getDateFormat(keysOfArray[months], i)][type].toFixed(2) : "0.00"
                rowArray.push(tabentry);

            }
            finalArray.push(rowArray)
        }
        return finalArray;
    }
    constructor(props) {
        super(props);
        this.state = { accountdetails: {}, tabledatadebits: [], tabledatacredits: [], tableHeaders: [], headersfeeandsurcharge:[], datafeeandsurcharge: [] }
    }
    componentDidMount() {
        var _this = this;
        const accountnumber = localStorage.getItem('accountNumber');
        fetch('http://13.233.180.15/app/accountDetails?accountNo=' + accountnumber, {
            method: 'GET'
        }).then(function (response) {
            return response.json()
        }).then(function (body) {
            _this.setState({ accountdetails: body["DebitAndCreditDetails"], tabledatacredits: _this.getTableData(body["DebitAndCreditDetails"], "TotalCredit"), tabledatadebits: _this.getTableData(body["DebitAndCreditDetails"], "TotalDebit"), tableHeaders: _this.getTableHeader(body["DebitAndCreditDetails"]),headersfeeandsurcharge: _this.getHeadersFeeAndCharges(),datafeeandsurcharge:_this.getDataFeeAndCharges(body["feeAndCharges"]) })


        });

    }
    render() {
        return (
            <div>
                <div className="row" style={{ marginTop: "40px" }}>
                    <div className="col-md-3 col-md-offset-1">
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
                    <div className="col-md-3">
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
                    <div className="col-md-4">
                        <div className="panel panel-primary">
                            <div className="panel-heading"><h4>Fee and Charges (in Rs.)</h4></div>
                            <div className="panel-body">
                               {this.state.datafeeandsurcharge.length != 0? <table className="table" style={{ height: "100%", overflowY: "scroll" }}>
                                    <thead>

                                        {this.state.datafeeandsurcharge.length != 0?this.state.headersfeeandsurcharge.map((head, index) => {
                                            return <tr key={index}>

                                              {head.map((cell, index) => {
                                                    return (
                                                        <th key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</th>
                                                    );
                                                })}


                                            </tr>
                                        }
                                        ):<tr><th style={{textAlign:"center"}}>No Data Found</th></tr>}
                                    </thead>
                                    <tbody>
                                        {this.state.datafeeandsurcharge.length != 0?this.state.datafeeandsurcharge.map((head, index) => {
                                            return <tr key={index}>
                                                {head.map((cell, index) => {
                                                    return (
                                                        <td key={"cell_" + index} style={{ textAlign: "center" }}>{cell}</td>
                                                    );
                                                })}
                                            </tr>
                                        }
                                        ):<tr><th></th></tr>}
                                    </tbody>
                                </table>:<h5 style={{textAlign:"center"}}>No Data Found</h5>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
