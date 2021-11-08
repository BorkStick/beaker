import React from 'react'

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import UserList from "../components/UserList/UserList";
import { BackButton } from '../components/Button/BackButton';
import AddButton from '../components/Button/AddButton';



export default function users_page() {
    return (
        <>
        <TopNav />
        <Logo />
        <div>
        <Container>
        <h3>Users</h3>
        <InnerContainer>
        <div className="row">
              <div className="col ">
                <BackButton />
              </div>
              <div className="col ">
                <AddButton linkTo="/add/user"/>
              </div>
            </div>
          <Card>
            <UserList />
          </Card>
          </InnerContainer>
        </Container>
      </div>
      </>
    )
}
