import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Item from './Item';
import productos from '../api/Productos';
import { Container,Row } from "react-bootstrap";
import Swal from 'sweetalert2';

const ItemList = () => {

    const { categoriaId } = useParams();
    const [ResultProductos, setResultProductos] = useState([]);

    function onAdd(id, producto, cantidad) {
        Swal.fire({
            title: 'Item Agregado',
            text: `Se agregaron ${cantidad} unid. de ${producto} a su carrito`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    }

    const getProductos = () =>
        new Promise((resolve, reject) => {
            setTimeout(() => {
                if (productos.length > 0) {
                    resolve(productos);
                } else {
                    reject('No se encontraron productos');
                }
            }, 2000);
        });

    const getProductosPorCategoria = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productos.length > 0) {
                console.log(categoriaId);
                const productosCategoria = productos.filter((producto)=> producto.categoriaId == categoriaId);
                   console.log(productosCategoria);
                   resolve(productosCategoria);
            } else {
                reject('No se encontraron productos');
            }
        }, 2000);
    });

    useEffect(() => {        
            getProductos().then(
                (result) => { setResultProductos(result); },
                (err) => { setResultProductos([]) }
            );        
    }, []);

    useEffect(() => {
        getProductos().then(
            (result) => { setResultProductos(result); },
            (err) => { setResultProductos([]) }
        );
    }, [categoriaId]);

    /*
    useEffect(() => {
        if(categoriaId>0){
        getProductosPorCategoria().then(
            (result) => { setResultProductos(result); },
            (err) => { setResultProductos([]) }
        );}
    }, [categoriaId]);*/

    
    return (
        <div>
            <Container>
                <Row>
                    {ResultProductos.map((producto) =>
                        <Item item={producto} onAdd={onAdd} initial={1} />
                    )}
                </Row>
            </Container>
        </div>
    );

}

export default ItemList;