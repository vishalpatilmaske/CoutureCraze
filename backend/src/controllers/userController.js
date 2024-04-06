import connection from "../dbconnection/dbconnect.js";
import { createSignup } from "../models/signup.model.js";
import { signupValidation } from "../validation/user.validation.js";

// Api to store the users in database
export const signupUser = async (req, res) => {
  // user input validation

  const { error } = signupValidation.validate(req.body);

  // Check if there are validation errors
  if (error) {
    return res.status(400).json({ error: error.details.map((e) => e.message) });
  }

  // Take the data from the client
  const { email, password } = req.body;
  const values = [email];

  // Check if the user exists
  const checkUserExists = "SELECT * FROM users WHERE email = ?";
  connection.query(checkUserExists, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ success: false, error: "Error executing query" });
      return;
    }

    if (result.length === 0) {
      // User doesn't exist, insert the new user
      createSignup(email, password, (err, userId) => {
        if (err) {
          return res.status(500).json({ error: "Error creating signup" });
        }
        res.json({ message: "Signup successful", userId });
      });
    } else {
      // User already exists
      res.status(200).json({ success: false, message: "User already exists" });
    }
  });
};

// Api to login the user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "email and password are required" });
  }

  // Query to check if the user exists in the database
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  connection.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    // If user is found, return success message
    if (result.length > 0) {
      return res.json({ message: "Sign in successful", email: email });
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  });
};
