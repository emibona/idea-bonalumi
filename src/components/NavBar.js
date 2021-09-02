import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { NavLink } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown, Alert} from 'react-bootstrap';
import { faHome, faAddressBook, faSoap, faSprayCan, faTooth, faMedkit, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartWidget from './CartWidget';
//import Login from './Login';


const NavBar = () => {

  const { cantidades,orderCreatedId } = useContext(CartContext);
  return (<div>
  <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>
    <NavLink to={ `/` }>
        <div className="dot">
            <FontAwesomeIcon icon={faShoppingCart} />
        </div> PerfuBONA
    </NavLink>
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
        {cantidades > 0 && <Nav.Link><NavLink to={ `/carrito` }><CartWidget cant={cantidades}/></NavLink></Nav.Link>}
        <Nav.Link><NavLink to={ `/contacto` }><FontAwesomeIcon icon={faAddressBook} /> Contáctenos</NavLink></Nav.Link>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
{orderCreatedId != null && <Alert key={orderCreatedId} variant='success'>Se ha generado su pedido # {orderCreatedId}</Alert>}
<br></br>
  </div>);
};

export default NavBar;