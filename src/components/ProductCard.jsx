import React, { useState } from "react";
import { Card, Button, Toast } from "react-bootstrap";
import { useCarrito } from "../Contexts/CarritoContext.jsx";

function ProductCard({ product }) {
  const { agregarProducto } = useCarrito(); 
  const { id, name, price, description, image } = product;
  const [mensaje, setMensaje] = useState(""); 

  const handleAgregar = () => {
    agregarProducto(product);
    setMensaje(`✅ ${name} agregado al carrito`);
    setTimeout(() => setMensaje(""), 1500); // desaparece en 1.5s
  };

  return (
    <>
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
          <Button
            variant="primary"
            className="mt-auto"
            onClick={handleAgregar}
          >
            Agregar al carrito
          </Button>
        </Card.Body>
      </Card>

      {mensaje && (
        <Toast
          style={{ position: "fixed", bottom: 20, right: 20, zIndex: 9999 }}
          onClose={() => setMensaje("")}
          show={true}
          delay={1500}
          autohide
        >
          <Toast.Body>{mensaje}</Toast.Body>
        </Toast>
      )}
    </>
  );
}

export default ProductCard;
