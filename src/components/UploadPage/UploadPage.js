import React from 'react';
import { Link } from 'react-router-dom';
import './UploadPage.css';
import { withRouter } from 'react-router-dom';
import Background from '../../images/Background_banner.jpeg'


class UploadPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
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
        fetch('http://13.127.164.129:5000/statement', { 
            method: 'POST',
            body: formData 
        }).then(function (res) {
            res.text().then(function(data) {
                localStorage.setItem('accountNumber',JSON.parse(data).account_number);
                console.log(JSON.parse(data).account_number);
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
                        <div className="jumbotron jumbotron-fluid" style={{ backgroundImage: "url(" + Background + ")", backgroundRepeat: "no-repeat", backgroundSize: "100%", height: "800px" }}>
                            <div className="jumbotron jumbotron-fluid" style={{ background: "none", textAlign:"center",color: "#fff", border: "2px dashed #fff", marginTop:"10%",backgroundColor: "rgba(255,255,255,.2)" }}>

                                <form>
                                    <h1 className="display-4">Bank Statement Analyzer</h1>  
                                    <br/>
                                    <input id="fileinput" type="file" onChange={this.handleUpload} placeholder = "Click here to Upload" />
                                    
                                    <label htmlFor="fileinput" style={{cursor:"pointer"}}>Click here to Upload</label>
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