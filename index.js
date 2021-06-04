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
  db.connect(function (err) {
    if (err) throw err;
    promptUser();
  });
  
  // start inquirer
  
  function promptUser() {
    console.log(`
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      *******EMPLOYEE TRACKER*******
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      `);
  
    return (
      inquirer
        .prompt([
          {
            type: "list",
            name: "startTracker",
            message: "What would you like to do?",
            choices: [
              "view all departments",
              "view all roles",
              "view all employees",
              "add a department",
              "add a role",
              "add an employee",
              "update an employee role",
            ],
          },
        ])
  
        // need to set up what to do with the selected answer
  
        .then((promptAnswer) => {
          switch (promptAnswer.startTracker) {
            case "view all departments":
              allDep();
              break;
  
            case "view all roles":
              allRoles();
              break;
  
            case "view all employees":
              allEmp();
              break;
              case "add a department":
                addDep();
                break;
    
              case "add a role":
                addRole();
                break;
    
              case "add an employee":
                addEmp();
                break;
    
              case "update an employee role":
                empUpdate();
                break;
    
              default:
                console.log = "program has quit";
                process.exit();
            }
          })
      );
    }
    