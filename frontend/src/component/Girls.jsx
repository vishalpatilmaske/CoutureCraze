import React from "react";
import women from "../data/women.json";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Girls.css";

function Girls() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setProducts(women);
  }, []);

  const handleClick = (product) => {
    navigate("/Dashboard", { state: { productDetails: product } });
  };

  return (
    <div className="row container-fluid">
      <div className="col-sm-3">filter</div>
      <div className="col-sm-9 row bg-dark ">
        {products.map((product, index) => (
          <div className="col-sm-4 product" key={index}>
            <div
              className="card"
              style={{ width: "18rem" }}
              onClick={() => handleClick(product)}
            >
              <img
                src={product.image}
                className="card-img-top"
                alt="product image"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="price">
                  <sup>₹</sup>
                  {product.price}
                </p>
              </div>
              <div className="card-body"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Girls;
