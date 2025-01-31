import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const CardProd = ({ product }) => {
  return (
    <div style={{ margin: "1%" }}>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Link to={`/prod/${product._id}`}>
            <Button variant="primary">Description</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardProd;
