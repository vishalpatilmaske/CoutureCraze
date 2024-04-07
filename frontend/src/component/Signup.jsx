import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

  // forntend validation
  const validation = () => {
    if (email.trim() === "") {
      alert("Email can't be empty");
      return false;
    }
    if (password.trim() === "") {
      alert("Password can't be empty");
      return false;
    }
    if (conPassword.trim() === "") {
      alert("Confirm Password can't be empty");
      return false;
    }
    if (password !== conPassword) {
      alert("Passwords do not match");
      return false;
    }
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (!specialCharacters.test(password)) {
      alert("Password must contain at least one special character");
      return false;
    }
    if (!/\d/.test(password)) {
      alert("Password must contain at least one number");
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      alert("Password must contain at least one uppercase letter");
      return false;
    }
    if (!/[a-z]/.test(password)) {
      alert("Password must contain at least one lowercase letter");
      return false;
    }
    return true;
  };

  const submitData = async (event) => {
    console.log(email, password);
    event.preventDefault();
    if (!validation()) {
      return;
    }
    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      // handle backend response
      const responseData = await response.json();

      if (response.ok) {
        alert(responseData.message);
      } else {
        console.error("Error:", response.statusText);
        alert(responseData.error);
      }
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  return (
    <div className="singup">
      <form name="login_form" onSubmit={submitData} method="post">
        <div className="singup-form" col-sm-12>
          <span className="cross-icon">
            <i className="fa-solid fa-xmark" />
          </span>
          <br />
          <div className="form-heading">
            <h2>Sign up</h2>
          </div>
          <div className="uname col-sm-12">
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <p className="error-message email" />
          <div className="pass col-sm-12">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Create Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p className="error-message password" />
          <div className="pass col-sm-12">
            <input
              type="password"
              className="form-control"
              name="confirm-Password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setConPassword(e.target.value);
              }}
            />
          </div>
          <p className="error-message confirm-password" />
          <div className="submit d-grid">
            <div className="submit d-grid mt-3">
              <input type="submit" className="btn btn-warning" />
            </div>
          </div>
          <p className="pt-2">
            Already have a account? <Link to="/Signin">Sign in</Link>
          </p>
        </div>
        <div className="message-submison"></div>
      </form>
    </div>
  );
}
