import { Link } from "react-router-dom";
import "../styles/Signup.css";
import { useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conpassword, setConPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConPasswordChange = (e) => {
    setConPassword(e.target.value);
  };
  function validation() {
    if (email.length === 0) {
      alert("Email can't be empty");
      return;
    }
    if (password.length === 0) {
      alert("Password can't be empty");
      return;
    }
    if (confirmPassword.length === 0) {
      alert("Confirm Password can't be empty");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    const containsSpecialCharacter = specialCharacters.test(password);
    if (!containsSpecialCharacter) {
      alert("Password must contain at least one special character");
      return;
    }

    const containsNumber = /\d/.test(password);
    if (!containsNumber) {
      alert("Password must contain at least one number");
      return;
    }

    const containsUppercase = /[A-Z]/.test(password);
    if (!containsUppercase) {
      alert("Password must contain at least one uppercase letter");
      return;
    }

    const containsLowercase = /[a-z]/.test(password);
    if (!containsLowercase) {
      alert("Password must contain at least one lowercase letter");
      return;
    }

    alert("Validation successful. Form can be submitted.");
  }

  return (
    <div className="singup">
      <form
        action=""
        name="login_form"
        onsubmit="return form_validation()"
        method="post"
      >
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
              onChange={handleEmailChange}
            />
          </div>
          <p className="error-message email" />
          <div className="pass col-sm-12">
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Create Password"
              onChange={handlePasswordChange}
            />
          </div>
          <p className="error-message password" />
          <div className="pass col-sm-12">
            <input
              type="password"
              className="form-control"
              name="confirm-Password"
              placeholder="Confirm Password"
              onChange={handleConPasswordChange}
            />
          </div>
          <p className="error-message confirm-password" />
          <div className="submit d-grid">
            <div className="submit d-grid mt-3">
              <input
                type="submit"
                className="btn btn-warning"
                defaultValue="Sign up"
                onClick={(e) => {
                  validation();
                  e.preventDefault();
                }}
              />
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
