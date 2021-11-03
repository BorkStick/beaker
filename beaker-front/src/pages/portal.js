import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import SearchInstall from "../components/SearchInstall/SearchInstall";
import AddInstall from "../components/AddInstall/AddInstall";
import Button from "../components/Button/Button";


export default function portal() {
  return (
    <>
      <TopNav />
      <Logo />
      <Container>
        <h3>Portal</h3>
        <InnerContainer>
          <Card>
            <Link to="/installs">
            <a class="btn btn-dark" href="#" role="button">Install List</a>
            </Link>

            <Link to="/users">
            <a class="btn btn-dark" href="#" role="button">User List</a>
            </Link>
          </Card>
          <Card>
            <SearchInstall />
          </Card>
          <Card>
            <AddInstall />
          </Card>
        </InnerContainer>
      </Container>
    </>
  );
}
