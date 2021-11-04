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
            <div className="row ">
              <div className="col d-flex justify-content-center">
                <Link to="/installs">
                  <button className="btn btn-dark btn-block rounded-0">
                    Install List
                  </button>
                </Link>
              </div>
              <div className="col d-flex justify-content-center">
                <Link to="/users">
                  <button className="btn btn-dark rounded-0 btn-block">User List</button>
                </Link>
              </div>
            </div>

          
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
