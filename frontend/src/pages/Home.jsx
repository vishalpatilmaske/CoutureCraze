import image1 from "../assets/images/carousel/home1.webp";
import image2 from "../assets/images/carousel/home2.webp";
import image3 from "../assets/images/carousel/home3.webp";
import poster1 from "../assets/images/poster/poster1.jpg";
import poster2 from "../assets/images/poster/poster2.webp";
// import product1 from "../assets/images/products/product1.jpg";
// import product2 from "../assets/images/products/product2.jpg";
// import product3 from "../assets/images/products/product3.jpg";
// import product4 from "../assets/images/products/product4.jpg";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Home() {
  return (
    <main>
      <section className="container-fluid mt-2 carousel p-0">
        <div
          id="carouselExampleAutoplaying"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={image1}
                className="d-block w-100 img-fluid"
                alt="image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image2}
                className="d-block w-100 img-fluid"
                alt="image"
              />
            </div>
            <div className="carousel-item">
              <img
                src={image3}
                className="d-block w-100 img-fluid"
                alt="image"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      {/* girsl products poster */}
      <section className="girlshop-poster container mt-3">
        <div className="container mb-3">
          <h2 className="poster-heading">FEATURED BRAND FOR WOMEN</h2>
        </div>
        <div className="girlshop-poster-images d-flex flex-row  contaier justify-content-evenly">
          <div>
            <img src={poster2} className="img-thumbnail " alt="poster" />
          </div>
          <div>
            <img src={poster1} className="img-thumbnail " alt="poster" />
          </div>
        </div>
      </section>

      {/* <section className="container-fluid  row mt-5">
        <div className="product-container col-3">
          <img src={product1} alt="product image" />
        </div>
        <div className="product-container col-3">
          <img src={product2} alt="product image" />
        </div>
        <div className="product-container col-3">
          <img src={product3} alt="product image" />
        </div>
        <div className="product-container col-3">
          <img src={product4} alt="product image" />
        </div>
      </section> */}
    </main>
  );
}
