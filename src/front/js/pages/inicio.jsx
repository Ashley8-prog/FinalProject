import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const MenuPage = (id, name) => {
  // Datos del menú (sustituir los datos)
  const menuItems = [
    {
      id: 1,
      name: "Plato 1",
      description: "Descripción del plato 1",
      price: "$10.99",
    },
    {
      id: 2,
      name: "Plato 2",
      description: "Descripción del plato 2",
      price: "$12.99",
    },
    {
      id: 3,
      name: "Plato 3",
      description: "Descripción del plato 3",
      price: "$14.99",
    },
    {
      id: 1,
      name: "Plato 1",
      description: "Descripción del plato 1",
      price: "$10.99",
    },
    {
      id: 2,
      name: "Plato 2",
      description: "Descripción del plato 2",
      price: "$12.99",
    },
    {
      id: 3,
      name: "Plato 3",
      description: "Descripción del plato 3",
      price: "$14.99",
    },
  ];

  return (
    <Container>
      <h1>Menú del Restaurante</h1>
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Precio: {item.price}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
