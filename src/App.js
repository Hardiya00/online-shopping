import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';
import OrderedItems from './OrderedItems'; 

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [orderedItems, setOrderedItems] = useState([]);
  const [showOrderedItems, setShowOrderedItems] = useState(false); // New state for showing ordered items

  const products = [
    

    {
      id: 1,
      name: 'Cool T-Shirt 1',
      description: 'A stylish and comfortable t-shirt.',
      price: 20,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt01.jpg', // Image path relative to public directory
    },
    {
      id: 2,
      name: 'Cool T-Shirt 2',
      description: 'Another cool t-shirt design.',
      price: 25,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt02.jpg', // Image path relative to public directory
    },
    {
      id: 3,
      name: 'Sporty T-Shirt',
      description: 'A sporty and vibrant t-shirt.',
      price: 18,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt03.jpg', // Replace with the actual image URL
    },
    
    {
      id: 4,
      name: 'Classic White Tee',
      description: 'A timeless white t-shirt.',
      price: 15,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt04.jpg', // Replace with the actual image URL
    },
    {
      id: 5,
      name: 'Graphic Print T-Shirt',
      description: 'A trendy t-shirt with graphic prints.',
      price: 22,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt05.jpg', // Replace with the actual image URL
    },
    {
      id: 6,
      name: 'Striped Polo Shirt',
      description: 'A stylish striped polo shirt.',
      price: 28,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt06.jpg', // Replace with the actual image URL
    },
    {
      id: 7,
      name: 'Vintage Logo Tee',
      description: 'A retro-style t-shirt with a vintage logo.',
      price: 19,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt07.jpg', // Replace with the actual image URL
    },
    {
      id: 8,
      name: 'Casual V-Neck Tee',
      description: 'A comfortable and casual v-neck t-shirt.',
      price: 17,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt08.jpg', // Replace with the actual image URL
    },
    {
      id: 9,
      name: 'Fitted Crewneck Tee',
      description: 'A fitted crewneck t-shirt for everyday wear.',
      price: 21,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt09.jpg', // Replace with the actual image URL
    },
    {
      id: 10,
      name: 'Printed Sleeve Tee',
      description: 'A t-shirt with stylish printed sleeves.',
      price: 23,
      sizes: ['Small', 'Medium', 'Large'],
      image: '../timages/tshirt010.jpg', // Replace with the actual image URL
    },
    
  ];

  const addToCart = (productId, size) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      setCartItems([...cartItems, { ...productToAdd, size }]);
      setTotal(total + productToAdd.price);
    }
  };

  const removeFromCart = (productId) => {
    const removedProduct = cartItems.find((item) => item.id === productId);
    if (removedProduct) {
      setTotal(total - removedProduct.price);
    }
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };
  const handleOrder = () => {
    setOrderedItems(cartItems);
    setCartItems([]);
    setTotal(0);
    setShowOrderedItems(true);
  };

  const handleOrderedItemsClose = () => {
    setShowOrderedItems(false);
  };

  const handleCancel = () => {
    setCartItems([]);
    setTotal(0);
  };
  
  return (
    <div className="app">
      <div className="products">
        {products.map((product) => (
          <Product key={product.id} {...product} addToCart={addToCart} />
        ))}
      </div>
      {showOrderedItems && (
        <OrderedItems orderedItems={orderedItems} onClose={handleOrderedItemsClose} />
      )}
      <div className="bottom-container">
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} total={total} />
        <div className="buttons">
          <button onClick={handleOrder}>Order</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
  
}

export default App;