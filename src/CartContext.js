import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCartContext() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartElements, setCartElements] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartElements.findIndex((item) => item.title === product.title);

    if (existingProductIndex !== -1) {
      const updatedCartElements = [...cartElements];
      updatedCartElements[existingProductIndex].quantity++;
      setCartElements(updatedCartElements);
    } else {
      setCartElements([...cartElements, { ...product, quantity: 1 }]);
    }
  };
  

  const removeCartItem = (title) => {
    const updatedCartElements = cartElements.filter((item) => item.title !== title);
    setCartElements(updatedCartElements);
  };

  return (
    <CartContext.Provider value={{ cartElements, addToCart, removeCartItem }}>
      {children}
    </CartContext.Provider>
  );
}
