import React from "react";
import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";

const LandingPage = () => {
  return (
    <section className="AboutStyle">
      <Container className="p-3">
        <Card className="border border-4 rounded-3" bg="dark" variant="dark">
          <Card.Header className="FontColor" as="h1">About Us</Card.Header>
          <Card.Body>
            <Card.Title className="FontColor" as="h2">Wetzel Investments, LLC....</Card.Title>
            <Card.Text className="FontColor" as="h4">
              Wetzel Investments, LLC is a locally owned and operated property
              management company. We have invested in multiple rental
              properties. The properties that we have acquired over the years is
              spread out throughout the Salt Lake Valley. It began as a joint
              venture between a father and son. Now it is operated by my sister
              Kathy Wetzel and I (Thomas Wetzel). Though the years we have
              provided wonderful roofs over the heads a variety of families. We
              look forward to continuing our success. If you have any further
              inquires place feel free to reach out us.
            </Card.Text>
            <Link to="/contact">
            <button className="MyButton float-end">Contact Us</button>
            </Link>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default LandingPage;
