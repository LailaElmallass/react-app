import React, { createContext, useContext, useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { v4 as uuid } from 'uuid';

const ProductContext = createContext();

export const useProducts = () => {
  return useContext(ProductContext);
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const generateProducts = () => {
      const fakeProducts = Array.from({ length: 20 }).map(() => ({
        id: uuid(),
        label: faker.commerce.productName(),
        image: faker.image.url(), 
        price: faker.commerce.price(),
        qtyStock: faker.number.int({ min: 1, max: 100 }) ,
      }));
      setProducts(fakeProducts);
    };

    generateProducts();
  }, []);

  const addProduct = (product) => {
    setProducts((prev) => [...prev, { id: uuid(), ...product }]);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter(product => product.id !== id));
  };

  const editProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map(product => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, editProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
