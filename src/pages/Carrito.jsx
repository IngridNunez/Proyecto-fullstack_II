import React from "react";
import { useCarrito } from "../Contexts/CarritoContext";
import { Button, Image, Row, Col, Card } from "react-bootstrap";

export default function Carrito() {
  const { carrito, agregarProducto, eliminarProducto, vaciarCarrito } = useCarrito();

  const total = carrito.reduce((sum, item) => sum + item.price * item.cantidad, 0);

  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Tu carrito</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <>
          {carrito.map((item) => (
            <Card key={item.id} className="mb-3 p-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col xs={5}>
                  <h5>{item.name}</h5>
                  <p>${item.price}</p>
                </Col>
                <Col xs={4} className="d-flex align-items-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => {
                      if (item.cantidad > 1) {
                        eliminarProducto(item.id);
                        agregarProducto({ ...item, cantidad: item.cantidad - 1 });
                      } else {
                        eliminarProducto(item.id);
                      }
                    }}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.cantidad}</span>
                  <Button variant="secondary" size="sm" onClick={() => agregarProducto(item)}>
                    +
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    className="ms-2"
                    onClick={() => eliminarProducto(item.id)}
                  >
                    🗑️
                  </Button>
                </Col>
              </Row>
            </Card>
          ))}

          <h4 className="mt-3">Total: ${total.toFixed(2)}</h4>
          <Button variant="secondary" onClick={vaciarCarrito} className="mt-2">
            Vaciar carrito
          </Button>
        </>
      )}
    </div>
  );
}
//a