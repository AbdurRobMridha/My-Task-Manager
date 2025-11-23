const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'taskdb',
    waitForConnections: true,
    connectionLimit: 10,
    port: 3306 
});

module.exports = pool.promise();
