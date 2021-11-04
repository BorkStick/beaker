import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import SearchInstall from "../components/SearchInstall/SearchInstall";
import AddInstall from "../components/AddInstall/AddInstall";



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
            <button className="btn btn-dark">Install List</button>
            </Link>

            <Link to="/users">
            <button className="btn btn-dark" >User List</button>
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
