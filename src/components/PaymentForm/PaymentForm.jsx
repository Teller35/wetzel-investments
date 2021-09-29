import React from "react";
import { Modal } from "react-bootstrap";

const PaymentForm = ({ handleClose }) => {
  

  return (
    <>
      <Modal.Body className="MyModal">This section will hold the payment form</Modal.Body>
        <Modal.Footer className="MyModal">
          <button className="MyButton" onClick={handleClose}>
            Make Payment
          </button>
        </Modal.Footer>
    </>
  );
};

export default PaymentForm;
