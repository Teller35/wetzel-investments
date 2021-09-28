import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";

const MyNavBar = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-1">Wetzel Investments</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="/">Payment</Nav.Link>
                        <Nav.Link href="/">Maintenance Request</Nav.Link>
                        <Nav.Link href="/">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default MyNavBar;