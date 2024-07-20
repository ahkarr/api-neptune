let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function deleteIndex(min,max){
  return Math.floor(
      Math.random() * (max-min)+min
    )
}

connection.connect((err) => {
  if (err) return console.error(err.message);

  let sql = `DELETE FROM ApiWorkFlow WHERE id = ?`;

  let data = deleteIndex(0,10)

  connection.query(sql, data, (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log('Rows affected:', results.affectedRows);
    console.log('API Reference Number',data,'is being deleted')
  });

  let sql1 = `DELETE FROM UserInfo WHERE UserId = ?`;

  let data1 = deleteIndex(0,10)

  connection.query(sql1, data1, (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log('Rows affected:', results.affectedRows);
    console.log('UserId',data1,'is being deleted');
  });
  // close the database connection
  connection.end();
});
