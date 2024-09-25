import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './app_product_form/components/Home';
import FormApp from './app_product_form/components/FormApp';
import Header from './app_product_form/components/Header';
import Product from './app_product_form/components/Product';
import Edit from './app_product_form/components/Edit';
import { ProductProvider } from './app_product_form/components/ProductContext'

function App() {
    return (
      <ProductProvider>
        <Router>
          <Header/>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/product" element={<Product />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/form" element={<FormApp />} />
          </Routes>
        </Router>
      </ProductProvider>
    );
}

export default App;
