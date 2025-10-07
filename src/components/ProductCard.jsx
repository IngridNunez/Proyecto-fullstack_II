import React from "react";

function ProductCard({ product }) {
  const {id, name, price, description, image } = product;
  return (


    <div className="card product-card d-flex flex-column justify-content-between">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><strong>Precio:</strong> ${price}</p>
        <a href="#" className="btn btn-primary">Agregar al carrito</a>
      </div>
    </div>
  );
}

export default ProductCard;

