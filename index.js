const fs = require("fs");
const inquirer = require("inquirer");
const { title } = require("process");
const generateMarkdown = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const questions = () =>{
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?"
        },
        {
            type: "input",
            name: "description",
            message: "Write a description for the functionality of your project..."
        },
        {
            type: "input",
            name: "install",
            message: "What do users need to do to get the dependencies for your project?"
        },
        {
            type: "input",
            name: "usage",
            message: "How does one use your project?"
        },
        {
            type: "input",
            name: "test",
            message: "How can someone run tests for your project?"
        },
        {
            type: "input",
            name: "contribute",
            message: "How can someone help contribute to your project?"
        },
        {
            type: "list",
            name: "badge",
            message: "Select the appropriate license for your project...",
            choices: ["MIT", "MPL-2.0","GNU GPLv3", "Unlicense", "None of these..."]
        },
        {
            type: "input",
            name: "username",
            message: "What is your GitHub username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
    ]);
};

function writeToFile() {
    questions()
    .then((data) => writeFileAsync("README.md", generateMarkdown(data)))
    .then(() => console.log("README has been made successfully"))
    .catch((err) => console.log(err));
};

function init() {
    writeToFile();
};

init();