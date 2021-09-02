const util = require('util');
const mysql = require('mysql')

// developing connection with our db
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pleaseloveme101!',
    database: 'employees'
});

connection.connect();

// allows us to use more funcionatilty like async for easier use. 
connection.query = util.promisify(connection.query)

module.exports = connection;