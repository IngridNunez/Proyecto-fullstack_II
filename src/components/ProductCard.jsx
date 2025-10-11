import React from "react";
import { Card, Button } from "react-bootstrap";

function ProductCard({ product }) {
  const { id, name, price, description, image } = product;

  return (
    <Card className="h-100 d-flex flex-column" style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={image}
        alt={name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${price}
          </Card.Text>
        </div>
        <Button variant="primary" className="mt-auto">
          Agregar al carrito
        </Button>
      </Card.Body>
    </Card>
  );
}




export default ProductCard;
