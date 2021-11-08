import React, { Component } from "react";
import axios from "axios";

// post using axios
// https://www.youtube.com/watch?v=x9UEDRbLhJE

class AddUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault()

    console.log(this.state);
    axios.post("/api/users/add", this.state);
  };

  render() {
    const { userName, firstName, lastName, email } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="terryfromit"
              required
              name="userName"
              value={userName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
          <label>First Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Terry"
              required
              name="firstName"
              value={firstName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
          <label>Last Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Fromit"
              required
              name="lastName"
              value={lastName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
          <label>Email</label>
            <input
              type="email"
              className="form-control rounded-0"
              placeholder="terry.fromit@bork.host"
              required
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-dark rounded-0">Add</button>
        </form>
      </div>
    );
  }
}

export default AddUserForm;
