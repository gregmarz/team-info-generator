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
    name: "empSchool",
    message: "What school did this intern attend",
  },
];

function init() {
  inquirer.prompt(questions).then(function (data) {
    console.log(data);
  });
}

function writeFile() {}

init();
