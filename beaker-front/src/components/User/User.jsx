import React, { Component } from "react";

import data from "../../data/users.json";

import { Container } from "../styles/Container.styled";
import { InnerContainer } from "../styles/InnerContainer.styled";
import { Card } from "../styles/Card.styled";

import TopNav from "../TopNav/TopNav";
import Logo from "../Logo/Logo";


export default class User extends Component {
  render() {
    const user = data.users.find((p) => p.user === this.props.user);

    return (
      <div className="">
        <TopNav />
        <Logo />
        <Container>
          <h3 className="">{user.user}</h3>
          <InnerContainer>
            <Card>
              <h5 className="text-center">User Info</h5>
              <p>{user.user_id}</p>
              <p>{user.first_name}</p>
              <p>{user.last_name}</p>
              <p>{user.email}</p>
            </Card>
          </InnerContainer>
        </Container>
      </div>
    );
  }
}
