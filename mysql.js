var mysql = require('mysql');

var connection = mysql.createPool({
    host:'localhost',
    user:'jomanencinas',
    password:'jomanencinas',
    database:'cane'
});

module.exports = connection;
