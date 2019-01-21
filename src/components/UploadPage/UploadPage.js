import React from 'react';
import { Link } from 'react-router-dom';
import './UploadPage.css';
import { withRouter } from 'react-router-dom';
import Background from '../../images/Background_banner.jpeg';



class UploadPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.state = { bank_name: "HDFC" }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    handleUpload(e) {
        e.preventDefault();
        const input = document.getElementById('fileinput');
        const formData = new FormData();
        formData.append('file', input.files[0]);
        document.body.style.backgroundColor = "#262626";
        document.getElementById('app').innerHTML = "<div class='ring'>Loading<span class = 'loading'></span></div>";
        fetch('http://13.233.43.103:5000/upload/statement/'+this.state.bank_name, {
            method: 'POST',
            body: formData
        }).then(function (res) {
            res.text().then(function (data) {
                localStorage.setItem('accountNumber', JSON.parse(data).account_no);
                window.location.href = "/result";
            });
            // window.location.href = "/result";
        }, function (e) {
            alert("Error submitting form!");
        });
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

    }

    render() {
        return (

            <div>
                <div className="container-fluid">

                    <div className="row">
                        <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: "url(" + Background + ")", backgroundRepeat: "no-repeat", backgroundSize: "100% 100%", height: "735px", width: "100%", marginBottom: '0px' }}>
                            <div className="row">
                                <div className="col-md-4 offset-md-4">
                                    <label style={{ color: "white", fontSize: "20px", fontWeight: 600 }}>Select Bank:</label>
                                    <select className="form-control" name="bank_name" value={this.state.bank_name} onChange={this.handleChange}>
                                        <option value="HDFC">HDFC</option>
                                        <option value="SBI">SBI</option>
                                        <option value="AXIS">AXIS</option>
                                        <option value="KOTAK">KOTAK</option>
                                        <option value="ICICI">ICICI</option>
                                        <option value="PMCB">PMCB</option>
                                        <option value="CentralBank">Central Bank Of India</option>
                                        <option value="GreaterBombayBank">Greater Bombay Bank</option>
                                        <option value="SaraswatBank">Saraswat Bank</option>
                                        <option value="UnionBank">Union Bank Of India</option>
                                        <option value="Model_Co_Bank">Model Co Bank</option>
                                        <option value="“TJSB">TJSB</option>
                                        <option value="Kalyan_Janata">Kalyan Janata</option>
                                    </select>
                                </div>
                            </div>
                            <div className="jumbotron jumbotron-fluid" style={{ background: "none", textAlign: "center", color: "#fff", border: "2px dashed #fff", marginTop: "10%", backgroundColor: "rgba(255,255,255,.2)" }}>

                                <form>
                                    <h1 className="display-4">Bank Statement Analyzer</h1>
                                    <br />
                                    <input id="fileinput" type="file" onChange={this.handleUpload} placeholder="Click here to Upload" />

                                    <label htmlFor="fileinput" style={{ cursor: "pointer" }}>Click here to Upload</label>
                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>



        );
    }
}
export default withRouter(UploadPage); 