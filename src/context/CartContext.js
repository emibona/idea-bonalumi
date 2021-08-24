import React, { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ defaultValue = false, children }) => {
  const [items, setItems] = useState([
    {
      item: {id: 999,
            title: '',
            pictureUrl: 'https://www.coinsasalud.com.ar/images/dental.jpg', 
        price: 0},
      cantidad: 0,
    },
  ]);

  const addItem = (producto, cantidad) => {
    const item = {
      item: producto,
      cantidad: cantidad,
    };
    let duplicado = false;
    items.map((itemCarrito) => {
      if (itemCarrito.item.id === item.item.id) {
        itemCarrito.cantidad += item.cantidad;
        duplicado = true;
      }
    });
    if (!duplicado) {
      const newItems = [...items, item];
      setItems(newItems);
    }
    
    //console.log(items);
  };

  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const clearAllItems = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, clearAllItems }}>
      {children}
    </CartContext.Provider>
  );
};
