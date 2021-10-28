import React, { Component } from "react";

import data from "../../data/installs.json";

import { Container } from "../styles/Container.styled";
import { InnerContainer } from "../styles/InnerContainer.styled";
import { Card } from "../styles/Card.styled";

import TopNav from "../TopNav/TopNav";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
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
              <div className="text-center pb-4">
                
                <span>
                  <a href={install.domain} target="_blank" rel="noreferrer">
                    {install.domain}
                  </a>
                </span>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <span>
                      <b>Install Name: </b>
                    </span>
                    <span>{install.install}</span>
                  </div>
                  <div>
                    <span>
                      <b>Temp Domain: </b>
                    </span>
                    <span>
                      <a
                        href={install.temp_domain}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {install.temp_domain}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <span>
                      <b>Owner: </b>
                    </span>
                    <span>{install.owner}</span>
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <h5 className="text-center">Buttons</h5>
              <ButtonRow />
            </Card>
            <Card>
              <h5 className="text-center">Logs</h5>
              <div className="row">
                <div className="col">
                  <h5 className="text-center">Access Logs</h5>
                  <div className="d-grid gap-2 justify-content-center">
                    <Button button_text="Nginx" />
                    <Button button_text="Apache" />
                  </div>
                </div>
                <div className="col d-block ">
                  <h5 className="text-center">Error Logs</h5>
                  <div className="d-grid gap-2 justify-content-center">
                    <Button button_text="Nginx" />
                    <Button button_text="Apache" />
                  </div>
                </div>
              </div>
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
