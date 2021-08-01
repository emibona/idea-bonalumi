import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const ItemListContainer = ({ greeting }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                <h2>{greeting}</h2>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Card style={{ Width: "90%" }}>
            <Card.Body>
              <Card.Title>Producto 1</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ Width: "90%" }}>
            <Card.Body>
              <Card.Title>Producto 2</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ Width: "90%" }}>
            <Card.Body>
              <Card.Title>Producto 3</Card.Title>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ItemListContainer;