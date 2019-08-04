import React, { Component, Fragment } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./layout.styles.css";

/**
 * This class based component decides how the layout of the app looks.
 * It displays the build dashboard and contains a container that follows css grid pattern.
 *
 * @author Jay
 */
export default class LayoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <Container className="container">
          <Row>
            <Col sm={8}>
              <Card />
            </Col>
            <Col sm={4}>
              <Card className="card" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card className="card" />
            </Col>
            <Col>
              <Card className="card" />
            </Col>
            <Col>
              <Card className="card" />
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
