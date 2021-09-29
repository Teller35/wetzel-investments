import React, { useState } from "react";
import * as emailjs from "emailjs-com";

const MainForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    address: "",
    message: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // console.log(formState);
    emailjs
      .sendForm(
        "service_ceojbdc",
        "template_ncb5isn",
        ".request_form_class",
        "user_Xoo1hhq7KOs1qoIcsfONM"
      )
      .then()
      .then(alert("Your request has been sent!"))
      .then(
        setFormState({
          name: "",
          address: "",
          email: "",
          message: "",
        })
      )
      .catch();
  };

  return (
    <section>
      <div>
        <h1>Oh no what is the problem?</h1>
        <form onSubmit={handleFormSubmit} className="request_form_class">
          <div>
            <input
              type="text"
              name="name"
              size="30"
              placeholder="What is your name?"
              onChange={handleInputChange}
              value={formState.name}
            />
          </div>
          <div>
            <input
              type="text"
              name="address"
              size="30"
              placeholder="Address request is for?"
              onChange={handleInputChange}
              value={formState.address}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              size="30"
              placeholder="What is your email?"
              onChange={handleInputChange}
              value={formState.email}
            />
          </div>
          <div>
            <input
              type="text"
              name="message"
              size="30"
              placeholder="What is the trouble?"
              onChange={handleInputChange}
              value={formState.message}
            />
          </div>
          <button className="MyButton" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default MainForm;
