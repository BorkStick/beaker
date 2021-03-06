import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserInstallList extends Component {
  state = {
    isLoading: true,
    installs: [],
  };

  async componentDidMount() {
    
    const response = await fetch(`/api/installs/user/2`);
    const body = await response.json();
    this.setState({ installs: body, isLoading: false }, () =>
      console.log("User Installs: " + this.state.installs[0].ownerId)
    );
  }


  render() {
    const { installs, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="">
        <header className="">
          <div className="">
            {installs.map((installs) => (
              <div key={installs.installId}>
                <Link to={`/installs/${installs.installName}`} className="text-dark">
                  <div className="card">
                    <div className="card-body">
                      <span className="card-title">{installs.installName}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default UserInstallList;
