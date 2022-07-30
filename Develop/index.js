// TODO: Include packages needed for this application
const generateReadMe = require("./utils/generateMarkdown");

//  write fle
const fs = require("fs");

// asked the user for data
const inquirer = require("inquirer");

// generate the html
const generateMd = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your Github username?",
        name: "username",
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log("Please enter a valid username");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is the name of your Github Repository?",
        name: "repo",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid Github Repository");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "What is the title of the project you are working on?",
        name: "title",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please enter a valid project title.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Please give a description of your project.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Describe the steps needed to install your project for the Installation section.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide instructions and exmaples on how to use your project.",
        name: "usage",
    },
    {
        type: "input",
        message: "If there were other developers in your project then please include their names.",
        name: "contributors",
    },
    {
        type: "input",
        message: "Please list all of the techonologies that were used to create the project.",
        name: "technology",
    },
    {
        type: "list",
        message: "Please select a license for your project:",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "BSD 3-Clause 'NEW' or 'Revised' License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal", "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense"],
        name: "username",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            return console.log(err);
        } 
        
        console.log("You have successfully generated your Readme.md")
    }); 
}

// const writeFileAsync = util.promisify(writeToFile);

// TODO: Create a function to initialize app
function init() {

    // ask the user questions
    // THEN I want to pass 'responses' to generateMarkDown so we can get the 'markdown'

    // THEN write the markdown' to a file using the 'writeToFile' other than README.md
    // put the file name in the .gitignore as well
    // 
}

// Function call to initialize app
init();
