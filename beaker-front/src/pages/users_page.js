import React from 'react'

import { Container } from "../components/styles/Container.styled";
import { InnerContainer } from "../components/styles/InnerContainer.styled";
import { Card } from "../components/styles/Card.styled";

import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";
import UserList from "../components/UserList/UserList";



export default function users_page() {
    return (
        <>
        <TopNav />
        <Logo />
        <div>
        <Container>
        <h1>Users</h1>
        <InnerContainer>
          <Card>
            <UserList />
          </Card>
          </InnerContainer>
        </Container>
      </div>
      </>
    )
}
