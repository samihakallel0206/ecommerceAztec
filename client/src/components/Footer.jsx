import React from 'react'
import { Card } from 'react-bootstrap';

const Footer = () => {
  return (
    <div>
      {" "}
      <Card>
        <Card.Header>Quote</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              Aztec_Gold_Elementalist
            </p>
            <footer className="blockquote-footer">
              2025 <cite title="Source Title">MERN</cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Footer