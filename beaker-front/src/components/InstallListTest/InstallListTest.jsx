import React, { Component } from 'react';

class InstallListTest extends Component {
  state = {
    isLoading: true,
    installs: []
  };

  async componentDidMount() {
    const response = await fetch('/api/installs');
    const body = await response.json();
    this.setState({ installs: body, isLoading: false });
  }

  render() {
    const {installs, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div className="">
        <header className="">
          
          <div className="">
            <h2>Install List</h2>
            {installs.map(installs =>
              <div key={installs.installId}>
                {installs.installName}
              </div>
            )}
          </div>
        </header>
      </div>
    );
  }
}

export default InstallListTest;