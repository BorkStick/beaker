import React, { Component } from "react";
import { Link } from "react-router-dom";

class InstallListTest extends Component {
  state = {
    isLoading: true,
    installs: [],
  };

  async componentDidMount() {
    const response = await fetch("/api/installs");
    const body = await response.json();
    this.setState({ installs: body, isLoading: false });
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
            <h2>Install List</h2>
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

export default InstallListTest;
