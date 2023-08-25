import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useCartContext } from './CartContext'; // Import the context

const productsArr = [
  // ...
];

const MainSection = () => {
  const { addToCart } = useCartContext(); // Use the addToCart function from the context

  return (
    <Container className="mt-5">
      {/* ... */}
      {productsArr.map((product, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button variant="primary" onClick={() => addToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      {/* ... */}
    </Container>
  );
};

export default MainSection;
