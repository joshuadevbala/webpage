import React from 'react';
import './style.css';


class ComplaintForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserComplaintForm = this.submituserComplaintForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields
      });

    }

    submituserComplaintForm(e) {
      e.preventDefault();
      if (this.validateForm()) {
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          fields["mobileno"] = "";
          fields["compno"] = "";
          fields["compdate"] = "";
          fields["complaint"] = "";
          this.setState({fields:fields});
          alert("Complaint submitted");
      }

    }

    validateForm() {

      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      if (!fields["emailid"]) {
        formIsValid = false;
        errors["emailid"] = "*Please enter your email-ID.";
      }

      if (typeof fields["emailid"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(fields["emailid"])) {
          formIsValid = false;
          errors["emailid"] = "*Please enter valid email-ID.";
        }
      }

      if (!fields["mobileno"]) {
        formIsValid = false;
        errors["mobileno"] = "*Please enter your mobile no.";
      }

      if (typeof fields["mobileno"] !== "undefined") {
        if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["mobileno"] = "*Please enter valid mobile no.";
        }
      }

      if (!fields["compno"]) {
        formIsValid = false;
        errors["compno"] = "*Please enter your complaint no.";
      }

      if (typeof fields["compno"] !== "undefined") {
        if (!fields["compno"].match(/^[0-9]{3}$/)) {
          formIsValid = false;
          errors["compno"] = "*Please enter valid complaint no.";
        }
      }

      if (!fields["compdate"]) {
        formIsValid = false;
        errors["compdate"] = "*Please enter your complaint date.";
      }

      if (typeof fields["compdate"] !== "undefined") {
        if (!fields["compdate"].match(/^[0-9]{8}$/)) {
          formIsValid = false;
          errors["compdate"] = "*Please enter valid complaint date.";
        }
      }

      if (!fields["complaint"]) {
        formIsValid = false;
        errors["complaint"] = "*Please enter your complaint .";
      }

      if (typeof fields["complaint"] !== "undefined") {
        if (!fields["complaint"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["complaint"] = "*Please enter alphabet characters only.";
        }
      }


      this.setState({
        errors: errors
      });
      return formIsValid;


    }



  render() {
    return (
    <div id="main-complaint-container">
     <div id="complaint">
        <h3>Complaint form</h3>
        <form method="post"  name="userComplaint Form"  onSubmit= {this.submituserComplaintForm} >
        <label>Name</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        <label>Email ID:</label>
        <input type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange}  />
        <div className="errorMsg">{this.state.errors.emailid}</div>
        <label>Mobile No:</label>
        <input type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange}   />
        <div className="errorMsg">{this.state.errors.mobileno}</div>
        <label>Comp No:</label>
        <input type="text" name="compno" value={this.state.fields.compno} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.compno}</div>
        <label>Comp Date:</label>
        <input type="text" name="compdate" value={this.state.fields.compdate} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.compdate}</div>
        <label>Complaint</label>
        <input type="text" name="complaint" value={this.state.fields.complaint} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.complaint}</div>
        <input type="submit" className="button"  value="Send"/>
        </form>
    </div>
</div>

      );
  }


}


export default ComplaintForm;