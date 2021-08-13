import React from 'react';
import { Link } from 'react-router-dom';
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
    <Link to={ `/` }><CartWidget /></Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/"><FontAwesomeIcon icon={faHome} /> Inicio</Nav.Link>
        <NavDropdown title="Categorias" id="basic-nav-dropdown">
          <NavDropdown.Item><Link to={ `/categoria/1` }><FontAwesomeIcon icon={faSprayCan} /> Desodorantes</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={ `/categoria/2` }><FontAwesomeIcon icon={faSoap} /> Jabones</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={ `/categoria/3` }><FontAwesomeIcon icon={faTooth} /> Cuidado Dental</Link></NavDropdown.Item>
          <NavDropdown.Item><Link to={ `/categoria/4` }><FontAwesomeIcon icon={faMedkit} /> Botiquín</Link></NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><Link to={ `/carrito` }><FontAwesomeIcon icon={faShoppingCart} /> Mi Carrito</Link></Nav.Link>
        <Nav.Link><FontAwesomeIcon icon={faAddressBook} /> Contáctenos</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<br></br>
  </div>);
};

export default NavBar;