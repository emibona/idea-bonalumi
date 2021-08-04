import React, {useState} from 'react';
import { Container, Nav, Navbar, NavDropdown, Alert } from 'react-bootstrap';
import { faHome, faAddressBook, faSoap, faSprayCan, faTooth, faMedkit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from './CartWidget';


const NavBar = () => {

  const [seccion, setSeccion] = useState('Inicio');

  return (<div>
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">
       <CartWidget />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Inicio</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Desodorante') }><FontAwesomeIcon icon={faSprayCan} /> Desodorantes</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Jabones') }><FontAwesomeIcon icon={faSoap} /> Jabones</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Cuidado Dental') }><FontAwesomeIcon icon={faTooth} /> Cuidado Dental</NavDropdown.Item>
          <NavDropdown.Item onClick={ () => setSeccion('Categoria > Botiquín') }><FontAwesomeIcon icon={faMedkit} /> Botiquín</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link onClick={ () => setSeccion('Contáctenos') }><FontAwesomeIcon icon={faAddressBook} /> Contáctenos</Nav.Link>        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<Alert variant="info" id="info-seccion">{ seccion }</Alert>
  </div>);
};

export default NavBar;