import connection from "../dbconnection/dbconnect.js";

// Api to store the users in database
export const getUserData = async (req, res) => {
  // Take the data from the client
  const { email, password } = req.body;
  const values = [email];
  // Check if the user exists
  const checkUserExists = "SELECT * FROM users WHERE user_email = ?";
  connection.query(checkUserExists, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ success: false, error: "Error executing query" });
      return;
    }

    if (result.length === 0) {
      // User doesn't exist, insert the new user
      const insertUserQuery =
        "INSERT INTO users (user_email, user_password) VALUES (?, ?)";
      const insertValues = [email, password];
      connection.query(insertUserQuery, insertValues, (err, result) => {
        if (err) {
          console.error("Error inserting user data: ", err);
          res
            .status(500)
            .json({ success: false, error: "Error inserting user data" });
          return;
        }
        console.log("User data inserted successfully");
        res
          .status(200)
          .json({ success: true, message: "User data inserted successfully" });
      });
    } else {
      // User already exists
      res.status(200).json({ success: false, message: "User already exists" });
    }
  });
};
