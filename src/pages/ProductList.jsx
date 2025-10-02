import React from 'react';
import Navbar from '../components/Navbar';

import ProductCard from '../components/ProductCard';

import { productos } from '../db/productos';



function ProductList() {
  // Usando los productos importados directamente
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {productos.map(product => ( // itera sobre la lista de productos y renderiza un ProductCard para cada uno
            <div className="col-md-3" key={product.id}>
              <ProductCard product={product} /> {/* pasa el producto como prop al componente ProductCard */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
