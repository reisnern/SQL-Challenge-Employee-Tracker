//Needeed dependancies
const inquirer = require("inquirer");
const mysql = require("mysql");
const CTable = require("console.table");

//const db = require('./db/connection')
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "Raptor10!",
      database: "employee_tracker",
    },
    console.log("connected to the Employee Tracker database.")
  );