import React from 'react';
import Add from './Add';
import { useProducts } from './ProductContext';
import { Link } from 'react-router-dom'; 

const Product = () => {
  const { products, deleteProduct } = useProducts();

  return (
    <div>
      <h2>Product List</h2>
      <Add />
      <div className="table-responsive">
        <table className="table table-light">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Label</th>
              <th scope="col">Image</th>
              <th scope="col">Price</th>
              <th scope="col">Stock Quantity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => 
               (<tr key={product.id}>
                <td>{product.id.slice(0, 5)}</td>
                <td>{product.label}</td>
                <td>
                  <img src={product.image} alt={product.label} style={{ width: '100px', height: '100px' }} />
                </td>
                <td>{product.price}</td>
                <td>{product.qtyStock}</td>
                <td>
                  <button onClick={() => deleteProduct(product.id)}>Delete</button>
                  <Link to={`/edit/${product.id}`}>
                    <button>Edit</button> 
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Product;
