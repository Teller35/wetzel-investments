import React from "react";
import { Row, Col, CardGroup, Card } from "react-bootstrap";
import MailBox from "../assets/mailbox-logo.png";
import Phone from "../assets/phone-logo.png";
import Email from "../assets/email-logo.png";

const ContactForm = () => {
  return (
    <section className="ContactStyle">
      <h1 className="FontColor p-3 text-center">Contact</h1>
      <div className="m-3">
        <h3 className="FontColor p-2">
          Please feel free to reach out to us though any form of contact below!
        </h3>
      </div>
      <div>
      <Row xs={1} md={2} lg={3}>
          <Col className="p-2">
          <Card className="m-auto MyBorder" style={{ width: "20rem"}}>
            <Card.Img variant="top" src={MailBox} style={{ height: "19.5rem" }} />
            <Card.Body className="FontColor">
              <Card.Title>Mailing Address</Card.Title>
              <Card.Text>
                Insert P.O. Box here, or address Tom wants to use
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="">
          <Card className="m-auto" style={{ width: "20rem"}}>
            <Card.Img variant="top" src={Email} style={{ height: "20rem" }}/>
            <Card.Body className="FontColor">
              <Card.Title>Email Address</Card.Title>
              <Card.Text>
              Insert email address as a hyperlink here that Tom wants to use
              </Card.Text>
            </Card.Body>
          </Card>
          </Col>
          <Col className="">
          <Card className="m-auto" style={{ width: "20rem"}}>
            <Card.Img variant="top" src={Phone} style={{ height: "20rem" }}/>
            <Card.Body className="FontColor">
              <Card.Title>Phone</Card.Title>
              <Card.Text>
              Insert phone number and/or fax here that Tom wants to use
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </div>
    </section>
  );
};

export default ContactForm;
