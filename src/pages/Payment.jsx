import React, { useState } from "react";
import { Container, Card, Modal } from "react-bootstrap";
import PaymentForm from "../components/PaymentForm";

const Payment = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
        <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton className="MyModal">
            <Modal.Title className="MyModal">Payment Method Will Go Below</Modal.Title>
          </Modal.Header>
          <Modal.Body className="MyModal">
            <PaymentForm handleModalClose={handleClose} />
          </Modal.Body>
        </Modal>
      </>
      <div>
        <h1 className="FontColor p-3 text-center">Payment</h1>
      </div>
      <Container className="p-3 PayStyle">
        <Card className="border border-4 rounded-3" bg="dark" variant="dark">
          <Card.Header className="FontColor" as="h1">
            Need to make a payment?
          </Card.Header>
          <Card.Body>
            <Card.Text className="FontColor" as="h3">
              We have 2 options pay by check/money order to (mailing address
              inserted here) or can use our new convent feature and pay online
              using the link below! payment.
            </Card.Text>
            <button className="MyButton float-end" onClick={handleShow}>
              Make Payment
            </button>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default Payment;
