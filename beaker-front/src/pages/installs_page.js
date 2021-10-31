import React from "react";

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import InstallList from "../components/InstallList/InstallList";

export default function installs_page() {
  return (
    <>
      <TopNav />
      <Logo />
      <div>
        <Container>
        <h3>Installs</h3>
        <InnerContainer>
          <Card>
            <InstallList />
          </Card>
          </InnerContainer>
        </Container>
      </div>
    </>
  );
}
