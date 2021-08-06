import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import ItemList from './ItemList';

const ItemListContainer = ({ greeting }) => {
  
  return (
    <div>
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                {greeting}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>      
    </Container>
    <br></br>
    <ItemList />
  </div>   
  );
};

export default ItemListContainer;