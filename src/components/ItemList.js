import React, { useState, useEffect } from "react";
import { NavLink,useParams } from "react-router-dom";
import Item from "./Item";
import productos from "../api/Productos";
import { Container, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ItemList = () => {
  const { categoriaId } = useParams();
  const [resultProductos, setResultProductos] = useState([]);

  function mostrarCarrito(producto, cantidad) {
    console.log('producto',producto);
    console.log('cantidad',cantidad);
    //aca voy a controlar si tengo productos en el carrito para poder esconderlo o mostrarlo
    document.getElementById('div-ir-carrito').style.display = 'inline';    
  }

  const getProductos = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (productos.length <= 0) {
          reject("No se encontraron productos");
        }
        if (categoriaId > 0) {
            console.log("por categoria: " + categoriaId);
          const productosCategoria = productos.filter(
            (producto) => producto.categoriaId === parseInt(categoriaId)
          );
          resolve(productosCategoria);
        } else {
          resolve(productos);
        }
      }, 2000);
    });


  useEffect(() => {
    getProductos().then(
      (result) => {
        setResultProductos(result);
      },
      (err) => {
        console.log(err);
        setResultProductos([]);
      }
    );
  },[categoriaId]);

  return (
    <div>
      <div id="div-ir-carrito" style={{'display':'none'}}>
        <Button variant="warning"><NavLink to={ `/carrito` }><FontAwesomeIcon icon={faShoppingCart} />Termina tu Compra</NavLink></Button>
      </div>
      <Container>
        <Row>
          {resultProductos.map((producto) => (
            <Item key={producto.id} item={producto} mostrarCarrito={mostrarCarrito} initial={1} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
