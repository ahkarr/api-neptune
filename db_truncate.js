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

  let sql = `TRUNCATE TABLE UserInfo `;
  let sql1 = `TRUNCATE TABLE ApiWorkFlow`;

  connection.query(sql,(error, results, fields) => {
    if (error) return console.error(error.message);
    console.log("UserInfo Table is successfully truncated!");
  });

  connection.query(sql1,(error, results, fields) => {
    if (error) return console.error(error.message);
    console.log("ApiWorkFlow Table is successfully truncated!");
  });

  // close the database connection
  connection.end();
});