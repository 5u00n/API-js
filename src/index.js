const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "opel_db"
});

try {
  connection.connect();
} catch (e) {
  console.log("SQL conection failed");
  console.log(e);
}

const api = express();

api.use(express.static(__dirname + "/service"));
api.use(bodyParser.json());

api.listen(3200, () => {
  console.log("API started");
});

api.get("/project", (req, res) => {
   
        // if connection is successful
        connection.query("SELECT * FROM project", function (err, result, fields) {
          // if any error while executing above query, throw error
          if (err) throw err;
          // if there is no error, you have the result
          // iterate for all the rows in result
          res.json(result);
          console.log(result);
        });
      });

  api.post("/project/add", (req, res) => {
    connection.query(
      "INSERT INTO project (description) VALUES (?)",
      [req.body.item],
      (error, results) => {
        if (error) return res.json({ error: error });

        connection.query(
          "SELECT LAST_INSERT_ID() FROM project",
          (error, results) => {
            if (error) return res.json({ error: error });

            res.json({
              id: results[0]["LAST_INSERT_ID()"],
              description: req.body.item
            });
          }
        );
      }
    );
  });
