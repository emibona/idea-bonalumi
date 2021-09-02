import React, { useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { LoginContext } from "../context/LoginContext";

function Register() {
  const { registrar } = useContext(LoginContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  

  return (
    <div className="div-img-datos">
        <h3>Registro de Usuario</h3>
      <Form>
        <Row>
          <Col xs={3}>
            <Form.Control placeholder="Correo" type="email" onChange={ (ev)=>setEmail(ev.target.value) } />
          </Col>
          <Col xs={3}>
            <Form.Control placeholder="Contraseña" type="password" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Form.Control placeholder="Nombre" type="text" />
          </Col>
          <Col xs={3}>
            <Form.Control placeholder="Telefono" type="text" />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Button variant="success">Registrarse</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Register;
