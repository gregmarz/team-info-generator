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
    let { manName, manID, manEmail, manOffNum } = data;
    let manager;
    manager = new Manager(manName, manID, manEmail, manOffNum);
    empStore.push(manager);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew(data);
    }
  });
}

function genNew() {
  inquirer.prompt(empListChoice).then(function (data) {
    console.log(data);
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
    let { empName, empID, empEmail } = data;
    let employee;
    employee = new Employee(empName, empID, empEmail);
    empStore.push(employee);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew();
    }
  });
}

function genEng() {
  inquirer.prompt(engQuestion).then(function (data) {
    let { engName, engID, engEmail, engGit } = data;
    let engineer;
    engineer = new Engineer(engName, engID, engEmail, engGit);
    empStore.push(engineer);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew();
    }
  });
}

function genInt() {
  inquirer.prompt(intQuestion).then(function (data) {
    let { intName, intID, intEmail, intSchool } = data;
    let intern;
    intern = new Intern(intName, intID, intEmail, intSchool);
    empStore.push(intern.json);
    if (data.choiceConfirm === false) {
      return writeFile(empStore);
    } else {
      return genNew();
    }
  });
}

function writeFile(data) {
  let pplInfo = JSON.parse(data);
  console.log(`THIS IS THE DATA GIVEN TO WRITEFILE ${pplInfo}`);
  // const htmlFile = HTMLGen(data);
  // fs.writeFile(fileName, htmlFile, function (err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log("Generating Profile Page");
  //   }
  // });
}

init();
