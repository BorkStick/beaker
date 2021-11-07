import React from "react";

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import { BackButton } from "../components/Button/BackButton";
import AddUserForm from "../components/AddUserForm/AddUserForm";

export default function add_user_page() {
  return (
    <>
      <TopNav />
      <Logo />
      <div>
        <Container>
        <h3>Add User</h3>
        <InnerContainer>
          <BackButton/>
          <Card>
            <AddUserForm/>
          </Card>
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}
