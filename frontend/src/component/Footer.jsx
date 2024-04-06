import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer row container-fluid">
      <div className="col-4  col-md-3">
        <h5>My Account</h5>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          blanditiis quis nisi saepe rerum
        </p>
      </div>
      <div className="col-4 col-md-3">
        <h5>Contact</h5>
        <p>03 Patil Nagar , Umarkhed</p>
        <p>Maharashtra - 445206</p>
        <p>9322396236</p>
        <p>contact@cauture.com</p>
      </div>
      <div className="col-4 col-md-3">
        <h5>Information</h5>
        <p>New Products</p>
        <p>Best Sellers</p>
        <p>Our Blog</p>
        <p>About Our Shop</p>
        <p>Secure Shopping</p>
      </div>
    </div>
  );
}

export default Footer;
