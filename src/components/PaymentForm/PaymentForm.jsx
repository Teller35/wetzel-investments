import React from "react";
import { Modal } from "react-bootstrap";

const PaymentForm = ({ handleClose }) => {
  return (
    <>
      <Modal.Header closeButton className="FontColor">
        <Modal.Title>
          Payment Method Will Go Below
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="FontColor">
        This section will hold the payment form
      </Modal.Body>
      <Modal.Footer className="MyModal">
        <button className="MyButton" onClick={handleClose}>
          Submit
        </button>
      </Modal.Footer>
    </>
  );
};

export default PaymentForm;
