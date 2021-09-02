import React, { useContext, useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { LoginContext } from '../context/LoginContext';
import Swal from 'sweetalert2';

const Login = () => {
  const { login, logout } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const ingresar = () => {
    if(email.length <=0 || password.length<=0 ){
      Swal.fire({
        title: 'Acceso Incorrecto',
        text: `Debe ingresar su usuario y contraseña`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
    }
    
    login(email,password)
    .then((data)=>{
     if(!data.success){
      Swal.fire({
        title: 'Acceso Incorrecto',
        text: `${data.mensaje}`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return false;
     }
    });
       
  };

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="Correo" type="email" onChange={ (ev)=>setEmail(ev.target.value) }/>
          </Col>
          <Col>
            <Form.Control placeholder="Contraseña"  type="password" onChange={ (ev)=>setPassword(ev.target.value) }/>
          </Col>
          <Col>
          <Button variant="success" onClick={ ()=>ingresar() }>Ingresar</Button> <Button variant="warning" href="/registrarse">Registrarse</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Login;
