const inquirer = require("inquirer");
const fs = require("fs");

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
];

function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
  });
}

init();
