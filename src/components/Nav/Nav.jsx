import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const MyNavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container className="border border-3 rounded-3">
                    <Navbar.Brand href="/" className="fs-1">Wetzel Investments, LLC</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Payment</Nav.Link>
                        <Nav.Link href="/">Maintenance Request</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default MyNavBar;