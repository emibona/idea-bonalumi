import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetail';
import productos from '../api/Productos';
import { Container,Row } from "react-bootstrap";

const ItemDetailContainer = () => {

    const { productoId } = useParams();
    const [ResultProductos, setResultProductos] = useState([]);
    
    const getProducto = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                setResultProductos([]);
                if (productos.length > 0) {
                    const productoDetalle = productos.filter(producto => producto.id === parseInt(productoId));
                    resolve(productoDetalle);
                } else {
                    reject('No se encontraron productos');
                }
            }, 2000);
        });

    useEffect(() => {
        getProducto().then(
            (result) => { setResultProductos(result); },
            (err) => { setResultProductos([]) }
        );
    }, [productoId]);

    return (
        <div className="div-img-datos">
            <Container>
                <Row>
                    {ResultProductos.map((producto) =>
                        <ItemDetail key={producto.id} item={producto} initial={1} />
                    )}
                </Row>
            </Container>
        </div>
    );

}

export default ItemDetailContainer;