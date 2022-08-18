// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `${data}`, (err) => {
        if (err) throw err;
     })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
           {
            type: 'input',
            message: 'What is the project title?',
            name: 'title',
           },
           {
            type: 'input',
            message: 'Enter the description of the project.',
            name: 'description',
           },
           {
            type: 'input',
            message: 'Enter the installation instructions for the project.',
            name: 'installation',
           },
           {
            type: 'input',
            message: 'Enter the usage for the project.',
            name: 'usage',
           },
           {
            type: 'input',
            message: 'Enter the contributions to the project.',
            name: 'contributing',
           },
           {
            type: 'input',
            message: 'Enter the tests for the project.',
            name: 'tests',
           },
           {
            type: 'input',
            message: 'Enter your GitHub username.',
            name: 'github',
           },
           {
            type: 'input',
            message: 'Enter your E-mail address.',
            name: 'email',
           },
           {
            type: 'checkbox',
            message: 'Choose a license for the project.',
            name: 'license',
            choices: ['BSD 3-Clause License','MIT License', 'GPL License', 'No License'],
           },
        ]).then(data => {
            writeToFile('TESTREADME.md', generateMarkdown(data));
        })
}

// Function call to initialize app
init();
