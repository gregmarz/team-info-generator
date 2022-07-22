const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

function htmlDisplay(data) {
  console.log(data);
  `
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
                      <h1 class="card-header text-center"><b></b></h1>
                      <div class="card-body text-center">Hello This is information about the manager</div>
                      <div class="card-footer text-center">footer info</div>
                  </div>
              </div>

          </main>
      </body>
      </html>
      `;
}

function HTMLGen(data) {
  console.log(htmlDisplay(data));
}

module.exports = HTMLGen;
