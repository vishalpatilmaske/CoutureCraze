import React from "react";
import { useLocation } from "react-router-dom";
import "../styles/Dashboard.css";
function Dashboard() {
  const location = useLocation();
  const productDetails = location.state.productDetails;
  const images = productDetails.image_style;

  const offPersentage = Math.floor(Math.random() * (80 - 10 + 1)) + 10;
  const offPrice = Math.floor(Math.random() * (2001 - 400)) + 400;
  return (
    <div className="dashboard-container">
      <div className="dashboard row container mt-3 ">
        <div className="col-sm-6 row">
          <div className="col-sm-2 product-images">
            <ul>
              {images.map((product) => (
                <li>
                  <img src={product} alt="" />
                </li>
              ))}
            </ul>
          </div>
          <div className="col-sm-9  main-image">
            <img src={productDetails.image} alt="" />
          </div>
        </div>
        <div className="col-sm-6  p-5">
          <h3>{productDetails.description}</h3>
          <hr />
          <div className="price-container">
            <p className="off ">-{offPersentage}%</p>
            <p className="price">
              <sup>₹</sup>
              {productDetails.price}
            </p>
          </div>
          <p className="price-off">
            M.R.P.:
            <s> ₹{offPrice}</s>
          </p>
          <hr />
          <div className="select-container">
            <label htmlFor="size">Size : </label>
            <select name="size" id="size">
              <option value="L">L </option>
              <option value="S">S </option>
              <option value="M">M </option>
              <option value="XL">XL </option>
              <option value="XXL">XXL </option>
            </select>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
