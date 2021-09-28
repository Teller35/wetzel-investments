import React from "react";
import { Container, CardGroup, Card } from "react-bootstrap";
import MailBox from "../assets/mailbox-logo.png";
import Phone from "../assets/phone-logo.png";
import Email from "../assets/email-logo.png";

const ContactForm = () => {
  return (
    <section className="ContactStyle">
      <h1 className="FontColor p-3">Contact</h1>
      <div>
        <h3 className="FontColor p-2">
          Please feel free to reach out to us though any form of contact below!
        </h3>
      </div>
      <Container className="MyCard">
        <CardGroup className="MyCard">
          <Card className="p-2 MyCard">
            <Card.Img variant="top" src={MailBox} />
            <Card.Body className="FontColor">
              <Card.Title>Mailing Address</Card.Title>
              <Card.Text>
                Insert P.O. Box here, or address Tom wants to use
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-2">
            <Card.Img variant="top" src={Email} />
            <Card.Body className="FontColor">
              <Card.Title>Email Address</Card.Title>
              <Card.Text>
              Insert email address as a hyperlink here that Tom wants to use
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="p-2">
            <Card.Img variant="top" src={Phone} />
            <Card.Body className="FontColor">
              <Card.Title>Phone</Card.Title>
              <Card.Text>
              Insert phone number and/or fax here that Tom wants to use
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </section>
  );
};

export default ContactForm;
