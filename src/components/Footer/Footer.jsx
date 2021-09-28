import React from "react";

const Footer = () => {
  return (
    <section className="FooterStyle">
      <div className="position-absolute bottom-0 start-50 translate-middle-x">
        &copy;2021 by{" "}
        <a className="FontColor" href="https://github.com/Teller35" target="_blank" rel="noreferrer">
          Teller Wetzel
        </a>
      </div>
    </section>
  );
};

export default Footer;
