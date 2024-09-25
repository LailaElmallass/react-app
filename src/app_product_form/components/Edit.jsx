import React, { useState, useEffect } from 'react';
import { useProducts } from './ProductContext'; // Ensure this is the correct path
import { useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
  const { editProduct, products } = useProducts();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === id);

  const [editedProduct, setEditedProduct] = useState({
    label: '',
    price: '',
    qtyStock: 1,
  });

  useEffect(() => {
    if (product) {
      setEditedProduct({
        label: product.label,
        price: product.price,
        qtyStock: product.qtyStock,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editProduct({ ...product, ...editedProduct });
    navigate('/'); // Redirect to the main product list after editing
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="label"
        value={editedProduct.label}
        onChange={handleChange}
        placeholder="Label"
        required
      />
      <input
        type="text"
        name="price"
        value={editedProduct.price}
        onChange={handleChange}
        placeholder="Price"
        required
      />
      <input
        type="number"
        name="qtyStock"
        value={editedProduct.qtyStock}
        onChange={handleChange}
        placeholder="Quantity in Stock"
        required
      />
      <button type="submit">Edit Product</button>
    </form>
  );
};

export default Edit;
