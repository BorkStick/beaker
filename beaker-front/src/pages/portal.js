import React from "react";

import { Container } from "../components/styles/Container.styled";
import TopNav from "../components/TopNav/TopNav";
import Logo from "../components/Logo/Logo";


export default function portal() {
  return (
    <>
      <TopNav />
      <Logo />
      <Container>
          
        <span>Test Test 123</span>
      </Container>
    </>
  );
}
