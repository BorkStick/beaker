import React, { Component } from "react";

// import data from "../../data/installs.json";

import { Container } from "../styles/Container.styled";
import { InnerContainer } from "../styles/InnerContainer.styled";
import { Card } from "../styles/Card.styled";

import TopNav from "../TopNav/TopNav";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import ButtonRow from "../ButtonRow/ButtonRow";
import DangerButtonRow from "../ButtonRow/DangerButtonRow";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { BackButton } from "../Button/BackButton";

export default class InstallTest extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    isLoading: true,
    installs: [],
  };

  async componentDidMount() {
    console.log("this" + this.props.match.params.install);
    const response = await fetch(`/api/installs/${this.props.match.params.install}`);
    // console.log(await response.json());
    const body = await response.json();
    // const bodytest = {installName: "test test"}
    this.setState({ installs: body, isLoading: false }, () =>
      console.log(this.state.installs[0].installName)
    );
  }

  render() {
    // const { installs, isLoading } = this.state;
    // this.state.isLoading
    if (this.state.isLoading) {
      return <Loading />;
    }

    // const install = data.installs.find((p) => p.install === this.props.install);

    return (
      <div className="">
        <TopNav />
        <Logo />
        <Container>
          <h3 className="">{this.state.installs[0].installName}</h3>
          <InnerContainer>
            <BackButton />
            {/* <Card>
              <h5 className="text-center">Install Info</h5>
              <div className="text-center pb-4">
                
                <span>
                  <a href={installs.domain} target="_blank" rel="noreferrer">
                    {installs.domain}
                  </a>
                </span>
              </div>
              <div className="row">
                <div className="col">
                  <div>
                    <span>
                      <b>Install Name: </b>
                    </span>
                    <span>{installs.installName}</span>
                  </div>
                  <div>
                    <span>
                      <b>Temp Domain: </b>
                    </span>
                    <span>
                      <a
                        href={installs.tempDomain}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {installs.tempDomain}
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col">
                  <div>
                    <span>
                      <b>Owner: </b>
                    </span>
                    <Link
                to={`/users/${installs.user}`} className="text-dark"
              >
                    <span>{installs.owner}</span>
                    </Link>
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
                  <div className="d-flex flex-column gap-2 justify-content-center">
                    <Button button_text="Nginx" />
                    <Button button_text="Apache" />
                  </div>
                </div>
                <div className="col">
                  <h5 className="text-center">Error Logs</h5>
                  <div className="d-flex flex-column  gap-2 justify-content-center">
                    <Button button_text="Nginx" />
                    <Button button_text="Apache" />
                  </div>
                </div>
              </div>
            </Card>
            <Card>
              <h5 className="text-center">Danger Zone</h5>
              <DangerButtonRow />
            </Card> */}
          </InnerContainer>
        </Container>
      </div>
    );
  }
}
