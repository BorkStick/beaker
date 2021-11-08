import React, { Component } from "react";
import axios from "axios";

// post using axios
// https://www.youtube.com/watch?v=x9UEDRbLhJE

class AddInstallForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerId: "1",
      ownerUserName: "borkhost",
      installName: "",
      tempDomain: "",
      domain: "",
      serverIp: "10.0.0.80"
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    console.log(this.state);
    axios.post("/api/installs/add", this.state);
  };

  render() {
    const {
      ownerId,
      ownerUserName,
      installName,
      tempDomain,
      domain,
      serverIp
    } = this.state;

    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>Install Name</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="install name"
              required
              name="installName"
              value={installName}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Temp Domain</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="installname.bork.host"
              name="tempDomain"
              value={tempDomain}
              onChange={this.changeHandler}
            />
          </div>
          <div className="form-group">
            <label>Domain</label>
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="domain.com"
              name="domain"
              value={domain}
              onChange={this.changeHandler}
            />
          </div>
          <hr />
          <div className="form-group">
            <label>Owner ID</label>
            <select
              className="form-control"
              name="ownerId"
              value={ownerId}
              onChange={this.changeHandler}
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Owner Username</label>
            <select
              className="form-control"
              name="ownerUserName"
              value={ownerUserName}
              onChange={this.changeHandler}
            >
              <option value="borkhost">borkhost</option>
              <option value="test">test</option>
            </select>
          </div>

          <div className="form-group">
            <label>Server IP</label>
            <select
              className="form-control"
              name="serverIp"
              value={serverIp}
              onChange={this.changeHandler}
            >
              <option value="10.0.0.80">10.0.0.80</option>
              <option value="10.0.0.68">10.0.0.68</option>
            </select>
          </div>

          <button type="submit" className="btn btn-dark rounded-0">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default AddInstallForm;
