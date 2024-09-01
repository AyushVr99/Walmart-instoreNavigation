import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FrequentlyBoughtPopUp = ({ show, onHide, items }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Frequently Bought Items</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FrequentlyBoughtPopUp;
