import React from 'react';
import './OrderedItems.css'; 

const OrderedItems = ({ orderedItems, onClose }) => {
  return (
    <div className="ordered-items">
      <h2>Ordered Items</h2>
      <ul>
        {orderedItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={onClose}>OK</button>
    </div>
  );
};

export default OrderedItems;
