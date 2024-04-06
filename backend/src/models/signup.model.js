import connection from "../dbconnection/dbconnect.js";

export const createSignup = (email, password, callback) => {
  const query = `INSERT INTO users (email,password) VALUES (?,?)`;

  connection.query(query, [email, password], (err, result) => {
    if (err) {
      return callback(err);
    } else {
      callback(null, result.insertId);
    }
  });
};
