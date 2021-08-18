import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { faHome, faAddressBook, faSoap, faSprayCan, faTooth, faMedkit, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from './CartWidget';


const NavBar = () => {

  //const [seccion, setSeccion] = useState('Inicio');

  return (<div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>
    <NavLink to={ `/` }><CartWidget /></NavLink>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link><NavLink to={ `/` }><FontAwesomeIcon icon={faHome} /> Inicio</NavLink></Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item><NavLink to={ `/categoria/1` }><FontAwesomeIcon icon={faSprayCan} /> Desodorantes</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to={ `/categoria/2` }><FontAwesomeIcon icon={faSoap} /> Jabones</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to={ `/categoria/3` }><FontAwesomeIcon icon={faTooth} /> Cuidado Dental</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to={ `/categoria/4` }><FontAwesomeIcon icon={faMedkit} /> Botiquín</NavLink></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><NavLink to={ `/carrito` }><FontAwesomeIcon icon={faShoppingCart} /> Mi Carrito</NavLink></Nav.Link>
        <Nav.Link><FontAwesomeIcon icon={faAddressBook} /> Contáctenos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br></br>
  </div>);
};

export default NavBar;