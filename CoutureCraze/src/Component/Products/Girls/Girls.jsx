import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import data from "./products.json";
import "./Girls.css";

function Girls() {
  const [products, setProducts] = useState(data);
  const [likes, setLikes] = useState(products.map(() => false)); // Array of likes for each product
  const navigate = useNavigate();

  function handleHeartClick(index) {
    const updatedLikes = [...likes];
    updatedLikes[index] = !updatedLikes[index];
    setLikes(updatedLikes);
  }

  return (
    <section className="row row-cols-2 row-cols-md-4 g-4 container-fluid mt-3 mb-5">
      {products.map((item, index) => (
        <div className="col" key={index}>
          <div className="card mb-5 rounded card">
            <img
              src={item.product_src}
              className="img-fluid p-2 product-image w-50 h-80 mx-auto h-sm-10"
              alt="product image"
              onClick={() => {
                navigate("/Dashboard", {
                  state: {
                    product: item,
                  },
                });
              }}
            />
            <h5 className="card-title pt-1">{item.product_title}</h5>
            <p className="card-text p-1 text-truncate">
              {item.product_description}
            </p>
            <p className="card-text">
              <sup>₹</sup>
              <b>{item.product_price}</b> M.R.P : ₹ <s>{item.product_of}</s>
              <span> (47% off)</span>
              <div className="mt-4 d-flex justify-content-center align-items-center">
                <div className="col-10 d-flex justify-content-center align-items-center">
                  <button
                    type="button"
                    className="btn btn-warning btn-sm rounded-pill col-8 mb-2"
                  >
                    Add Cart
                  </button>
                </div>
                <div className="col-2 me-sm-3 mb-0">
                  {likes[index] ? (
                    <FaHeart
                      className="text-danger"
                      size={30}
                      onClick={() => handleHeartClick(index)}
                    />
                  ) : (
                    <CiHeart
                      size={30}
                      onClick={() => handleHeartClick(index)}
                    />
                  )}
                </div>
              </div>
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Girls;
