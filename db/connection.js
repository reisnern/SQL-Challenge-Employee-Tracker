const mysql = require('mysql');
// connect to mysql database
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: 'root',
        password: 'Raptor10!',
        database: 'employee_tracker'
    },
    console.log('connected to the Employee Tracker database.')
);


//export the file 
module.exports = db;