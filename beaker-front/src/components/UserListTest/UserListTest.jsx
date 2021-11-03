import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserListTest extends Component {
  state = {
    isLoading: true,
    users: [],
  };

  async componentDidMount() {
    const response = await fetch("/api/users");
    const body = await response.json();
    this.setState({ users: body, isLoading: false });
  }

  render() {
    const { users, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="">
        <header className="">
          <div className="">
            {users.map((users) => (
              <div key={users.installId}>
                <Link to={`/installs/${users.userName}`} className="text-dark">
                  <div className="card">
                    <div className="card-body">
                      <span className="card-title">{users.userName}</span>
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

export default UserListTest;
