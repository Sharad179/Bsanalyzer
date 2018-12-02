import React from 'react';
import { withRouter } from 'react-router-dom';
// import ReactDOM, { render } from 'react-dom';
// import { Link } from 'react-router-dom';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import TopNav from "../TopNav/TopNav";

import './ResultPage.css';
import VerticalTable from "../TableComponent/VerticalTable";
import AccountInfoComponent from "../AccountInfoComponent/AccountInfoComponent";
import AccountDetailsComponent from "../AccountDetailsComponent/AccountDetailsComponent";


// import { userActions } from '../_actions';

class ResultPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { accountNumber: "" }

    }
    componentDidMount() {
        this.setState({ accountNumber: localStorage.getItem('accountNumber') })
        document.body.style.backgroundColor = "#f4f8fb";
    }
    render() {
        return (

            <div>
                <HeaderComponent header="Account Summary"></HeaderComponent>
                <div className="row" style={{ marginTop: "40px" }}>
                    <AccountInfoComponent accountnumber={this.state.accountNumber}></AccountInfoComponent>
                    <AccountDetailsComponent></AccountDetailsComponent>
                </div>

            </div>
        );
    }
}   

export default withRouter(ResultPage); 
