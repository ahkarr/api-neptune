let mysql = require('mysql');

let connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

function searchIndex(min,max){
  return Math.floor(
      Math.random() * (max-min)+min
    )
}

connection.connect((err) => {
  if (err) return console.error(err.message);

  // select statment
  let sql = `SELECT * FROM ApiWorkFlow awf WHERE Id = ?`;
  let data = searchIndex(0,10);

  // execute the select statment
  connection.query(sql, [data], (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log('ApiWorkFlow List');
    console.log('searchIndex :',data)
    console.log(results);
  });

  // select statment
  let sql1 = `SELECT * FROM UserInfo WHERE UserId = ?`;
  let data1 = searchIndex(0,10)

  // execute the select statment
  connection.query(sql1, [data1], (error, results, fields) => {
    if (error) return console.error(error.message);
    console.log('UserInfo List')
    console.log('searchIndex :',data1)
    console.log(results);
  });
  // close the database connection
  connection.end();
});