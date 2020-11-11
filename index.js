const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generatemarkdown")



const questions = [{
        type: "input",
        name: "username",
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
            "BSD 3-Clause",
            "Unlicense"
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
        default: "npm run test"
    },
    {
        type: "input",
        name: "usage",
        message: "Are there any instructions for usage?"
    },
    {
        type: "input",
        name: "credits",
        message: "Are there are collaborators, creators, or third-party assets that need to be noted?"
    },
    {
        type: "input",
        name: "questions",
        message: "Contact information for any questions"
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