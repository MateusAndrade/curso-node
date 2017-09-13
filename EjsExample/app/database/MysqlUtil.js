const mysql = require("mysql");
const pool;

module.exports = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'node'
});
