import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css'
import './app_product_form/components/header.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>
);
