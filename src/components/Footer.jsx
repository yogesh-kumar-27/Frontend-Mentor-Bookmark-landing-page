import React from "react";
import logo from "../assets/images/footer.svg";
import img1 from "../assets/images/icon-facebook.svg";
import img2 from "../assets/images/icon-twitter.svg";
const Footer = () => {
  return (
    <section className="footer">
      <footer className="footer__container">
        <div className="left">
          <img src={logo} alt="" />
          <a href="#features">features</a>
          <a href="#pricing">pricing</a>
          <a href="#contact">contact</a>
        </div>
        <div className="right">
          <img src={img1} alt="" />
          <img src={img2} alt="" />
        </div>
      </footer>
    </section>
  );
};

export default Footer;
