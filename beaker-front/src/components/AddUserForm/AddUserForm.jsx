import React, { Component } from "react";
import axios from "axios"

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
      this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    //e.preventDefault()
    
    
    console.log(this.state);
    axios.post('/api/users/add', this.state)
  }

  render() {
    const { userName, firstName, lastName, email } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddUserForm;
