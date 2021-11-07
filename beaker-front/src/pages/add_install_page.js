import React from "react";

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import { BackButton } from "../components/Button/BackButton";
import AddInstallForm from "../components/AddInstallForm/AddInstallForm";

export default function add_install_page() {
  return (
    <>
      <TopNav />
      <Logo />
      <div>
        <Container>
        <h3>Add Install</h3>
        <InnerContainer>
          <BackButton/>
          <Card>
            <AddInstallForm/>
          </Card>
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}
