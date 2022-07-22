const inquirer = require("inquirer");
const fs = require("fs");

const fileName = "./dist/index.html";
const HTMLGen = require("./src/HTML");

const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const empList = ["Employee", "Engineer", "Intern"];

const empStore = [];

const questions = [
  {
    name: "manName",
    message: "What is the name of the manager?",
  },
  {
    name: "manID",
    message: "What is the manager's ID?",
  },
  {
    name: "manEmail",
    message: "What is the manager's email?",
  },
  {
    name: "manOffNum",
    message: "What is the manager's office number",
  },
  {
    type: "confirm",
    name: "choiceConfirm",
    message: "Would you like to add a new employee",
    default: false,
  },
];

const empListChoice = [
  {
    type: "list",
    name: "choice",
    choices: empList,
  },
];

const empQuestion = [
  {
    name: "empName",
    message: "What is the name of this Employee",
  },
  {
    name: "empID",
    message: "What is the ID of this Employee",
  },
  {
    name: "empEmail",
    message: "What is the email of this Employee",
  },
  {
    type: "confirm",
    name: "choiceConfirm",
    message: "Would you like to add a new employee",
    default: false,
  },
];

const engQuestion = [
  {
    name: "engName",
    message: "What is the name of this Engineer",
  },
  {
    name: "engID",
    message: "What is the ID of this Engineer",
  },
  {
    name: "engEmail",
    message: "What is the email of this Engineer",
  },
  {
    name: "engGit",
    message: "What is the github for this Engineer",
  },
  {
    type: "confirm",
    name: "choiceConfirm",
    message: "Would you like to add a new employee",
    default: false,
  },
];

const intQuestion = [
  {
    name: "intName",
    message: "What is the name of this intern",
  },
  {
    name: "intID",
    message: "What is the ID of this intern",
  },
  {
    name: "intEmail",
    message: "What is the email of this intern",
  },
  {
    name: "intSchool",
    message: "What school did this intern attend",
  },
  {
    type: "confirm",
    name: "choiceConfirm",
    message: "Would you like to add a new employee",
    default: false,
  },
];

function init() {
  inquirer.prompt(questions).then(function (data) {
    const newManager = new Manager(
      data.manName,
      data.manID,
      data.manEmail,
      data.manOffNum
    );
    empStore.push(newManager);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew(data);
    }
  });
}

function genNew() {
  inquirer.prompt(empListChoice).then(function (data) {
    if (data.choice === "Employee") {
      return genEmp();
    } else if (data.choice === "Engineer") {
      return genEng();
    } else if (data.choice === "Intern") {
      return genInt();
    }
  });
}

function genEmp() {
  inquirer.prompt(empQuestion).then(function (data) {
    const newEmployee = new Employee(data.empName, data.empID, data.empEmail);
    empStore.push(newEmployee);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew();
    }
  });
}

function genEng() {
  inquirer.prompt(engQuestion).then(function (data) {
    const newEngineer = new Engineer(
      data.engName,
      data.engID,
      data.engEmail,
      data.engGit
    );
    empStore.push(newEngineer);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew();
    }
  });
}

function genInt() {
  inquirer.prompt(intQuestion).then(function (data) {
    const newIntern = new Intern(
      data.intName,
      data.intID,
      data.intEmail,
      data.intSchool
    );
    empStore.push(newIntern);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew();
    }
  });
}

function writeFile(info) {
  console.log(info);
  const infoExport = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Member Page</title>
</head>
<body>
    <header class="page-header text-center bg-dark p-5 mb-5">
        <h1 class="text-white">Welcome to your Page</h1>
    </header>

    <main class="container">
        <div class="col-12">
            <div class="card ">
                <h1 class="card-header text-center"><b>${info[0].name}</b>(Manager)</h1>
                <div class="card-body text-center">ID: ${info[0].id}</div>
                <div class="card-body text-center">Email: ${info[0].email}</div>
                <div class="card-footer text-center">Office Number: ${info[0].officenumber}</div>
            </div>
        </div>
        <div class="col-12">
            <div class="card ">
                <h1 class="card-header text-center"><b>${info[1].name}</b>(Employee)</h1>
                <div class="card-body text-center">ID: ${info[1].id}</div>
                <div class="card-body text-center">Email: ${info[1].email}</div>
            </div>
        </div>
        <div class="col-12">
            <div class="card ">
                <h1 class="card-header text-center"><b>${info[2].name}</b>(Engineer)</h1>
                <div class="card-body text-center">ID: ${info[2].id}</div>
                <div class="card-body text-center">Email: ${info[2].email}</div>
                <div class="card-footer text-center">School: ${info[2].github}</div>
            </div>
        </div>
        <div class="col-12">
            <div class="card ">
                <h1 class="card-header text-center"><b>${info[3].name}</b>(Intern)</h1>
                <div class="card-body text-center">ID: ${info[3].id}</div>
                <div class="card-body text-center">Email: ${info[3].email}</div>
                <div class="card-footer text-center">${info[3].school}</div>
            </div>
        </div>
       
        
    </main>
</body>
</html>
`;
  fs.writeFile(fileName, infoExport, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("generating README");
    }
  });
}

init();
