import React, { useState } from 'react';
import { useProducts } from './ProductContext';

const Add = () => {
  const { addProduct } = useProducts();
  const [label, setLabel] = useState('');
  const [price, setPrice] = useState('');
  const [qtyStock, setQtyStock] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({ label, price, qtyStock });
    setLabel('');
    setPrice('');
    setQtyStock(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={qtyStock}
        onChange={(e) => setQtyStock(Number(e.target.value))}
        min="1"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default Add;
