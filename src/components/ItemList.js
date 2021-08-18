import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from "./Item";
import productos from "../api/Productos";
import { Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";

const ItemList = () => {
  const { categoriaId } = useParams();
  const [resultProductos, setResultProductos] = useState([]);

  function onAdd(id, producto, cantidad) {
    Swal.fire({
      title: "Item Agregado",
      text: `Se agregaron ${cantidad} unid. de ${producto} a su carrito`,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
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
      <Container>
        <Row>
          {resultProductos.map((producto) => (
            <Item key={producto.id} item={producto} onAdd={onAdd} initial={1} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ItemList;
