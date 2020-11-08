const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generatemarkdown")


const questions = [{
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of your project"
    },
    {
        type: "input",
        name: "contents",
        message: "Please write a Table of Contents if you have one"
    },
    {
        type: "input",
        name: "credits",
        message: "Please include credits if you have any"
    },

    {
        type: "list",
        name: "license",
        message: "What kind of license should our project have?",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD 3",
            "None"
        ]
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be run to run test?",
        default: "npx test" 
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "credits",
        message: "Are there are collaborators, creators, or third-party assets that need to be noted?"
    }
   
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) console.log(err)
    })
}

function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile("README.md", generateMarkdown(data));
        })
}
init();



//     ]).then(function (answers) => {
// // do i need it to create a html file? it's a readme so it should be creating it in markdown? 
//         const htmlString = (answers) =>
//             `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//       <title>Document</title>
//     </head>
//     <body>
//       <div class="jumbotron jumbotron-fluid">
//       <div class="container">
//         <h1 class="display-4">Hi! My name is ${answers.name}</h1>
//         <p class="lead">I am from ${answers.location}.</p>
//         <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//         <ul class="list-group">
//           <li class="list-group-item">My GitHub username is ${answers.github}</li>
//           <li class="list-group-item">LinkedIn: ${answers.linkedin}</li>
//         </ul>
//       </div>
//     </div>
//     </body>
//     </html>`;

//         fs.writeFile("index.html", htmlString, err => {
//             if (err) console.log(err)
//         })

//     });

//     promptUser();