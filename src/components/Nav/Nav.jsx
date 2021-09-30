import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const MyNavBar = (props) => {
  const { paymentSelected, setPaymentSelected } = props;
  const { maintenanceSelected, setMaintenanceSelected } = props;
  const { contactSelected, setContactSelected } = props;

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container className="border border-3 rounded-3">
          <Navbar.Brand className="fs-1">Wetzel Investments, LLC</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="https://teller35.github.io/wetzel-investments/">
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setContactSelected(false);
                setMaintenanceSelected(false);
                setPaymentSelected(true);
              }}
            >
              Payment
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setContactSelected(false);
                setMaintenanceSelected(true);
                setPaymentSelected(false);
              }}
            >
              Maintenance Request
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setContactSelected(true);
                setMaintenanceSelected(false);
                setPaymentSelected(false);
              }}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default MyNavBar;
