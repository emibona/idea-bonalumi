import React, { createContext, useEffect, useState } from "react";
import { getFirestore } from "../firebase/firebase";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = false, children }) => {
  const [items, setItems] = useState([]);
  const [cantidades, setCantidades] = useState(0);
  const [importeTotal, setImporteTotal] = useState(0);
  const [orderCreatedId, setOrderCreatedId] = useState(null);

  const addItem = (producto, cantidad) => {
    const item = {
      item: producto,
      cantidad: cantidad,
    };
    let duplicado = false;
    items.forEach(itemCarrito => {
      if (itemCarrito.item.id === item.item.id) {
        itemCarrito.cantidad += item.cantidad;
        duplicado = true;
      }
    });
    if (!duplicado) {
      const newItems = [...items, item];
      setItems(newItems);
      //totalizar();
    }
    totalizar();   
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.item.id !== id);
    setItems(newItems);
    totalizar();
  };

  const removeItemCant = (id,cant) => {
    items.forEach(itemCarrito => {
      if (itemCarrito.item.id === id) {
        itemCarrito.cantidad -= cant;       
      }
    });
    totalizar();
  };

  const clearAllItems = () => {
    setItems([]);
    totalizar();
  };

  const totalizar = () => {
    let auxcants = 0;
    let auximps = 0;
    items.forEach(item => {
     auxcants = auxcants + item.cantidad;
     auximps = auximps + (item.cantidad * item.item.price);      
    });
    setCantidades(auxcants);
    setImporteTotal(auximps);
  }

  const finalizarCompra = () => {
    const itemsOrder = items.map((item)=>{
        return {
          id: item.item.id,
          title: item.item.title,
          cant: item.cantidad,
          price: item.item.price
        }
    })
    const orden = {
      date: new Date(),
      buyer: {
        name:'Emiliano',
        email:'emibona@yahoo.com.ar',
        phone: '158005297'
      },
      items: itemsOrder,
      total: importeTotal
    };
    console.log(orden);
    const db = getFirestore();
    const orders = db.collection("orders");
    // const docRef = db.collection("items").doc(items[0].item.id);
    const batch = db.batch();
    orders.add(orden)
    .then(({id}) => {
      setOrderCreatedId(id);
      // docRef.update({
        //   stock: items[0].item.stock - items[0].quantity,
        // });
        items.forEach((item) => {
          const docRef = db.collection("items").doc(item.item.id);
          batch.update(docRef, { stock: (item.item.stock - item.cantidad) });
        });
        batch.commit();
        clearAllItems();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    totalizar();
  },[items]);

  return (
    <CartContext.Provider value={{ items,cantidades,importeTotal,orderCreatedId, removeItemCant, addItem, removeItem, clearAllItems, finalizarCompra }}>
      {children}
    </CartContext.Provider>
  );
};
