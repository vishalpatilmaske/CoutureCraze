import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
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
    <div className="container d-flex justify-content-end">
      <section className="row col-md-10 g-4 container mt-3 mb-5  bg-dark">
        {products.map((item, index) => (
          <div className="col-4" key={index}>
            <div className="card mb-5 rounded card">
              <img
                src={item.product_src}
                className="img-fluid p-2 product-image w-30 h-60 mx-auto h-sm-10"
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
                <b>{item.product_price}</b> M.R.P :
                <div className="mt-2 d-flex justify-content-center align-items-center">
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
    </div>
  );
}

export default Girls;
