import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // handle api response
      const responseData = await response.json();
      if (response.ok) {
        alert(responseData.message);
        console.log(responseData.message);
      } else {
        alert(responseData.error);
      }
    } catch (error) {
      console.log("Error:", error.message);
      alert("Signup Error : Network Error");
    }
  };

  return (
    <div className="login">
      <form
        id="show-login"
        name="login_form"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="login-form col-sm-12">
          <span className="cross-icon">
            <a href="#">
              <i className="fa-solid fa-xmark"></i>
            </a>
          </span>
          <br />
          <div className="form-heading">
            <h2>Sign in</h2>
          </div>
          <div className="email text-start">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="pass text-start">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <br />
            <input
              type="password"
              className="form-control "
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="mt-2 mb-5">
            <p className="forgot">
              <a href="#">Forgot Password</a>
            </p>
          </div>
          <div className="submit d-grid  col-12">
            <input type="submit" className="btn btn-warning" value="Login" />
          </div>
          <p className="pt-2">
            Don't have an account?
            <Link className="signin" to="/Signup">
              Sign up
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}
