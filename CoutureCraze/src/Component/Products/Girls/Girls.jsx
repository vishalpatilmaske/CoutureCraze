import { useState } from "react";
import "./Girls.css";
import data from "./products.json";
import Dashboard from "../Dashboard/Dashboard";
import { Link } from "react-router-dom";
function Girls() {
  const [products, setProduct] = useState(data);

  return (
    <section className="row row-cols-2 row-cols-md-4 g-4  container-fluid mt-3 mb-5">
      {products.map((itme, index) => (
        <div className="col" key={index}>
          <div className="card h-100 mb-5 rounded">
            <Link to="/Dashboard" element={<Dashboard name="vishal" />}>
              <img
                src={itme.product_src}
                className="img-fluid p-2 product-image"
                alt="product image"
              />
            </Link>
            <h5 className="card-title pt-1">{itme.product_title}</h5>
            <p className="card-text  p-1">{itme.product_description}</p>
            <p className="card-text">
              <sup>₹</sup>
              <b>{itme.product_price}</b> M.R.P : <s>₹{itme.product_of}</s>
              <span> (47% off)</span>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Girls;
