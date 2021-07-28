import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Alert } from 'react-bootstrap';


const NavBar = () => {
  return (<div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">PerfuBona</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={ () => SelectSeccion('Categoria > Desodorante') }>Desodorantes</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => SelectSeccion('Categoria > Jabones') }>Jabones</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => SelectSeccion('Categoria > Cuidado Dental') }>Cuidado Dental</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => SelectSeccion('Categoria > Labiales') }>Labiales</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={ () => SelectSeccion('Contáctenos') }>Contáctenos</Nav.Link>        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Alert variant="info" id="info-seccion">Inicio</Alert>
  </div>);
};

const  SelectSeccion = (seccion) => {
  document.getElementById('info-seccion').innerHTML = seccion;
  console.log(seccion);
}

export default NavBar;