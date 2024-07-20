let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) return console.error(err.message);

  let sql = `DROP DATABASE neptune `;

  connection.query(sql,(error, results, fields) => {
    if (error) return console.error(error.message);
    console.log("neptune database is successfully dropped!");
  });

  // close the database connection
  connection.end();
});