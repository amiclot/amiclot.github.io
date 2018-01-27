import React, { Component } from "react";
import Nav from "./components/Nav";
import { Container, Row, Col } from "./components/Grid";
import Card from "./components/Card";
import Logo from "./components/Logo";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
          <Container>
            <Container>
              <Row>
                <Col size="xs-12">
                  <Card>
                    <Row>
                      <Col size="xs-4">
                        <Logo logo="port_img"/>
                      </Col>
                      <Col size="xs-8">
                        <div>
                          <div class="text-box">
                            <div class="hover">
                              <p>I am Case Western Coding Bootcamp Grad and a Retail Professional Merchant / MBA graduate, who is currently pursuing a web development position that will grow my experience and skills. I have experience in HTML5, CSS3, Javascript, JQuery, Bootstrap, MERN stack, Git and MySQL. Below are links to the github repositories for the projects I am working on.</p>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col size="xs-12">
                <form>
                  <Container>
                    <Row>
                      <Col size="xs-6">
                        <Card>

                        </Card>
                        <Card>

                        </Card>
                      </Col>
                      <Col size="xs-6">
                        <Card>

                        </Card>
                        <Card>

                        </Card>
                      </Col>
                    </Row>
                  </Container>
                </form>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default App;
