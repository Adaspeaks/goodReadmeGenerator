const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

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