import { useLocation } from "react-router-dom";
// import image from "../../Images/Poster/poster1.jpg";
import "./Dashboard.css";
import React from "react";

function Dashboard() {
  const data = useLocation();
  const {
    product_src,
    product_title,
    product_description,
    product_of,
    product_price,
  } = data.state.product || {};

  console.log(product_description); // why it shown undefiend

  return (
    <>
      <section className="container box row mt-5  mx-auto">
        <div className="product-image col-sm-6 row ">
          <div className="main-image-box">
            <img
              src={product_src}
              alt="girl image"
              className="img-fluid img-md-thumbnail product-main-image w-60"
            />
          </div>
        </div>
        <div className="product-imformation col-sm-6 text-start">
          <p className="product-info-text">{product_description}</p>
          <hr />
          <p className="product-price-info">
            <b className="pe-2">
              <sup>₹</sup>
              {product_price}
            </b>
            M.R.P : ₹<s> {product_of}</s>
          </p>
          <div className="d-flex">
            <span className="pe-4">
              <strong>Size : </strong>
            </span>

            <select
              className="form-select form-select-sm"
              aria-label="Small select example"
            >
              <option value="S" selected>
                S
              </option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="Xl">Xl</option>
            </select>
          </div>
          <hr />
          <div className="product-detials text-start">
            <table>
              <thead>
                <tr>
                  <th>
                    <strong className="product-info-detials-heading">
                      Product details
                    </strong>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Material type</th>
                  <td>Polyester</td>
                </tr>
                <tr>
                  <th>Length</th>
                  <td>Midi</td>
                </tr>
                <tr>
                  <th>Occasion type</th>
                  <td>Evening</td>
                </tr>
                <tr>
                  <th>Sleeve type</th>
                  <td>3/4 Sleeve</td>
                </tr>
                <tr>
                  <th>Pattern</th>
                  <td>Solid</td>
                </tr>
                <tr>
                  <th>Style</th>
                  <td>A-Line</td>
                </tr>
                <tr>
                  <th>Country of Origin</th>
                  <td>India</td>
                </tr>
              </tbody>
            </table>
          </div>
          <hr />
          <div className="buy-item-container">
            <div className="d-flex">
              <span className="pe-4">
                <strong>Quantity :</strong>
              </span>
              <select
                className="form-select form-select-sm"
                aria-label="Small select example"
              >
                <option value={1} defaultValue={1}>
                  1
                </option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
            </div>
            <br />
            <div className="buy-product-container d-flex flex-row gap-3">
              <button className="rounded-pill add-item w-50">
                Add to Cart
              </button>
              <br />
              <button className="rounded-pill buy-item w-50">Buy Now</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
