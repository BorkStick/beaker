import React from "react";
import { StyledLogo } from "../styles/StyledLogo";

export default function Logo() {
  return (
    <StyledLogo>
      <div className="text-center">
        <span className="logo-bork">BORK</span>
        <span className="logo-dot">.</span>
        <span className="logo-host">HOST</span>
      </div>
    </StyledLogo>
  );
}
