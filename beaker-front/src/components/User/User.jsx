import React, { Component } from "react";

import data from "../../data/users.json";

import { Container } from "../styles/Container.styled";
import { InnerContainer } from "../styles/InnerContainer.styled";
import { Card } from "../styles/Card.styled";

import TopNav from "../TopNav/TopNav";
import Logo from "../Logo/Logo";
import { BackButton } from "../Button/BackButton";
import UserInstallList from "../UserInstallList/UserInstallList";
import Loading from "../Loading/Loading";

export default class User extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    installs: [],
  };

  async componentDidMount() {
    console.log("this" + this.props.match.params.user);
    const response = await fetch(`/api/users/${this.props.match.params.user}`);
    const body = await response.json();
    this.setState({ users: body, isLoading: false }, () =>
      console.log(this.state.users[0].userName)
    );
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div className="">
        <TopNav />
        <Logo />
        <Container>
          <h3 className="">{this.state.users[0].userName}</h3>
          <InnerContainer>
            <BackButton />
            <Card>
              <h5 className="text-center">User Info</h5>
              <p>
                <span>
                  <b>ID: </b>
                </span>
                <span>{this.state.users[0].userId}</span>
              </p>
              <p>
                <span>
                  <b>First Name: </b>
                </span>
                <span>{this.state.users[0].firstName}</span>
              </p>
              <p>
                <span>
                  <b>Last Name: </b>
                </span>
                <span>{this.state.users[0].lastName}</span>
              </p>
              <p>
                <span>
                  <b>Email: </b>
                </span>
                <span>{this.state.users[0].email}</span>
              </p>
            </Card>
            <Card>
              <h5 className="text-center">Installs</h5>
              <UserInstallList />
            </Card>
            <Card>
              <h5 className="text-center">Billing</h5>
              <h3>$0.00</h3>
            </Card>
          </InnerContainer>
        </Container>
      </div>
    );
  }
}
