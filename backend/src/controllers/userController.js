import connection from "../dbconnection/dbconnect.js";
import bcrypt from "bcryptjs";
import { createSignup } from "../models/signup.model.js";
import { signupValidation } from "../validation/user.validation.js";

// Api to store the users in database
export const signupUser = async (req, res) => {
  // user input validation
  const { error } = signupValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details.map((e) => e.message) });
  }

  const { email, password } = req.body;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Check if the user exists
    const checkUserExists = "SELECT * FROM users WHERE email = ?";
    const values = [email];
    connection.query(checkUserExists, values, (err, result) => {
      if (err) {
        console.error("Error executing query:", err);
        res
          .status(500)
          .json({ success: false, error: "Error executing query" });
        return;
      }

      if (result.length === 0) {
        // User doesn't exist, insert the new user
        createSignup(email, hashedPassword, (err, userId) => {
          if (err) {
            return res.status(500).json({ error: "Error creating signup" });
          }
          res.json({ message: "Signup successful", userId });
        });
      } else {
        // User already exists
        res
          .status(200)
          .json({ success: false, message: "User already exists" });
      }
    });
  } catch (err) {
    console.error("Error hashing password:", err);
    res.status(500).json({ error: "Error hashing password" });
  }
};

// Api to login the user
export const loginUser = async (req, res) => {
  // user input validation
  const { error } = signupValidation.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.details.map((e) => e.message) });
  }

  const { email, password } = req.body;

  // Query to retrieve the hashed password for the given email
  const sql = `SELECT * FROM users WHERE email = ?`;
  connection.query(sql, [email], async (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Internal server error" });
    }

    // If user is found
    if (result.length > 0) {
      const user = result[0];
      const hashedPassword = user.password; // Assuming password column name is 'password'

      // Compare the hashed password with the provided password
      try {
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        if (passwordMatch) {
          return res.json({ message: "Sign in successful", email: email });
        } else {
          return res.status(401).json({ error: "User not found !" });
        }
      } catch (bcryptError) {
        console.error("Error comparing passwords:", bcryptError);
        return res.status(500).json({ error: "Error comparing passwords" });
      }
    } else {
      // User not found
      return res.status(401).json({ error: "Invalid email or password" });
    }
  });
};
