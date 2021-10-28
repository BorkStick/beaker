import React, { Component } from "react";

import data from "../../data/installs.json";
import TopNav from "../TopNav/TopNav";
import Logo from "../Logo/Logo";

import { Container } from "../styles/Container.styled";
import { InnerContainer } from "../styles/InnerContainer.styled";
import { Card } from "../styles/Card.styled";
import ButtonRow from "../ButtonRow/ButtonRow";
import DangerButtonRow from "../ButtonRow/DangerButtonRow";

export default class Install extends Component {
  render() {
    const install = data.installs.find((p) => p.install === this.props.install);

    return (
      <div className="">
        <TopNav />
        <Logo />
        <Container>
          <h3 className="">{install.install}</h3>
          <InnerContainer>
            <Card>
              <h5 className="text-center">Install Info</h5>
              <div>
                <span>
                  <b>Install Name: </b>
                </span>
                <span>{install.install}</span>
              </div>
              <div>
                <span>
                  <b>Domain: </b>
                </span>
                <span>
                  <a href={install.domain} target="_blank" rel="noreferrer">
                    {install.domain}
                  </a>
                </span>
              </div>
            </Card>
            <Card>
              <h5 className="text-center">Buttons</h5>
              <ButtonRow />
            </Card>
            <Card>
              <h5 className="text-center">Logs</h5>
              <ButtonRow />
            </Card>
            <Card>
              <h5 className="text-center">Danger Zone</h5>
              <DangerButtonRow />
            </Card>
          </InnerContainer>
        </Container>
      </div>
    );
  }
}
