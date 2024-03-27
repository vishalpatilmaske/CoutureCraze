import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submited Successfully");
  };

  return (
    <div className="login">
      <form
        action="action.php"
        id="show-login"
        name="login_form"
        method="post"
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
              onChange={handleEmailChange}
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
              onChange={handlePasswordChange}
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
