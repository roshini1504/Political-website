
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ImageGallery.css'; // Import CSS for custom styles

const images = [
  '/images/image1.jpg',
  '/images/image2.jpg',
  '/images/image3.jpg',
  '/images/image4.jpg',
  '/images/image5.jpg',
  '/images/image6.jpg',
];

const ImageGallery = () => {
  return (
    <Container>
      <Row>
        {images.map((image, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={image} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageGallery;
