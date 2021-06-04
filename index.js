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
    // //display all departments

// SELECT * from department;
function allDep() {
  const sql = `SELECT * from department`;
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.table("employee", res);
    promptUser();
  });
}

//"view all roles",
// SELECT * from ROLES;
function allRoles() {
  const sql = `SELECT * from roles`;
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.table("roles", res);
    promptUser();
  });
}

//"view all employees",
// SELECT * FROM employee
// LEFT JOIN roles ON employee.roles_id = roles.id;

function allEmp() {
  const sql = `SELECT * FROM employee LEFT JOIN roles ON employee.roles_id = roles.id`;
  db.query(sql, function (err, res) {
    if (err) throw err;
    console.table("roles", res);
    promptUser();
  });
}

//"add a department",
// INSERT INTO department (name)
// Values('');

function addDep() {
  inquirer
    .prompt([
      {
        name: "newDep",
        message: "what is the new Departments Name",
        validate: (newDepInput) => {
          if (newDepInput) {
            return true;
          } else {
            console.log("please enter a New Department Name");
            return false;
          }
        },
      },
    ])
    .then((answer) => {
      console.log(answer.newDep);
      const newDepartmentName = answer.newDep;
      const sql = `INSERT INTO department (name) VALUES (?)`;
      db.query(sql, [newDepartmentName], function (err, res) {
        if (err) throw err;
        console.table("department", res);
        promptUser();
      });
    });
}

function addRole() {
  inquirer.prompt([
    {
      name: "newTitle",
      message: "what is the new Title Name ",
      validate: (newTitleInput) => {
        if (newTotleInput) {
          return true;
        } else {
          console.log("please enter a New Title");
          return false;
        }
      },
    },
    {
      name: "newSalary",
      message: "what is the new Roles Salary in the format of XXXXX.XX",
      validate: (newSalaryInput) => {
        if (newSalaryInput) {
          return true;
        } else {
          console.log("please enter a Salary");
          return false;
        }
      },
    },
    {
      name: "newDepId",
      message: "please specify a new Department ID (numbers only)",
      validate: (newDepID) => {
        if (newDepID) {
          return true;
        } else {
          console.log("please enter a new departmen ID ");
          return false;
        }
      },
    },
  ])
//   .then((answer) => {
//     console.log(answer.newTitle, answer.newSalary, answer.newDepID);
//     const addARole = answer.newTitle, answer.newSalary, answer.newDepID;
//     const sql = `INSERT INTO rolls (title, salary, department_id) VALUES (?,?,?)`;
//     db.query(sql, [addARole], function (err, res) {
//       if (err) throw err;
//       console.table("roles", res);
//       promptUser();
//     });
//   });
}