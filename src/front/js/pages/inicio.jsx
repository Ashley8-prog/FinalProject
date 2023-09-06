import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/inicio.css";

const MenuPage = (id, name) => {
  // Datos del menú (sustituir los datos)
  const menuItems = [
    {
      id: 1,
      name: "T A C O S",
      description: "Descripción del plato 1",
      price: "$10.99",
      image:
        "https://img.freepik.com/foto-gratis/guacamole-fresco-taco-ternera-plato-rustico-multicolor-generado-ia_188544-56171.jpg?size=626&ext=jpg",
    },
    {
      id: 2,
      name: "P A S T A S",
      description: "Descripción del plato 2",
      price: "$12.99",
      image:
        "https://img.freepik.com/fotos-premium/lasana-lasana-deliciosa-comida-queso_701256-57.jpg?w=740",
    },
    {
      id: 3,
      name: "P O S T R E S",
      description: "Conocidos por su delicioso sabor, probálos!",
      price: "$14.99",
      image:
        "https://iasbh.tmgrup.com.tr/27b23a/1200/627/0/49/1024/583?u=https://isbh.tmgrup.com.tr/sbh/2020/02/27/harika-kivamiyla-pandispanya-tarifi-yumusacik-pandispanya-nasil-yapilir-1582812118332.jpg",
    },
  ];

  return (
    <Container className="inicio">
      <h1 className="titulodeinicio">Nuestros especiales</h1>
      <br />
      <br />
      <h5 className="subtitulodeinicio">
        Dicen que el amor por la comida es el amor más sincero, y por una buena
        razón, nos aseguran experiencias donde el placer es protagonista:
        sabores, texturas, aromas, son un mix irresistible que expresan
        sentimientos inevitables. <br />
        Dale un vistazo a nuestros deliciosos platillos especiales y anímate a
        probarlos.
      </h5>
      <Row>
        {menuItems.map((item) => (
          <Col key={item.id} md={4}>
            <Card className="cards">
              <Card.Body className="cuerpodecard">
                <img className="imagenesdeinicio" src={item.image} alt="" />
                {/* {<img src="rigo-baby.jpg" alt="" />} */}
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Precio: {item.price}</Card.Text>
                <Button variant="justify-content-center">
                  Ir al menú completo
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MenuPage;
