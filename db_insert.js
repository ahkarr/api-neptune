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

  // insert statment
  let sql = ` INSERT INTO ApiWorkFlow (WorkflowBody,CreatedAt,Channel,ApiPassKey)
              VALUES
              (JSON_OBJECT('TransLog',UUID(),'PurgedAt',NOW()),NOW(),CHAR( FLOOR(65 + (RAND() * 25))),UUID())`;

  // execute the insert statment
  connection.query(sql);
  console.log('1 row affected to ApiWorkFlow Table')

  let sql2 = `INSERT INTO UserInfo (UserName,LoginName,Password,CreatedAt)
              VALUES
              (UUID(),UUID(),JSON_OBJECT('TransLog',UUID(),'PurgedAt',NOW()),NOW())`;
  connection.query(sql2)
  console.log('1 row affected to UserInfo Table')


  // close the database connection
  connection.end();
});