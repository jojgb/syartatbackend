const mysql = require('mysql')

const conn = mysql.createConnection({
    user: 'root',
    password: 'admin',
    host: 'localhost',
    database: 'jcreactjonsql',
    port: '3307'
})

module.exports = conn