import React from "react";
import { StyledLogo } from "../styles/StyledLogo";

export default function Logo() {
  return (
    <StyledLogo>
      <span className="logo-bork">BORK</span>
      <span className="logo-dot">.</span>
      <span className="logo-host">HOST</span>
    </StyledLogo>
  );
}
