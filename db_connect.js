let mysql = require('mysql')

let connection = mysql.createConnection({
	host 		: process.env.DB_HOST,
	port 		: process.env.DB_PORT,
	user 		: process.env.DB_USER,
	password 	: process.env.DB_PASSWORD,
	database 	: process.env.DB_NAME
})

connection.connect((err)=>{
	if(err)
		return console.error(err.message);

	console.log('Connection established to prod-coreapp db 192.169.190.12/24');
	console.log('neptune db is connected now ...')
})

connection.end((err)=>{
	if(err)
		return console.error(err.message);
	console.log('Closing connection ...')
	console.log('Connection closed to prod-coreapp db 192.168.190.12/24');
})