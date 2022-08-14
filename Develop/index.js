// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([ //Testing
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
//    {
//     type: 'input',
//     message: 'Enter the description of the project.',
//     name: 'description',
//    },
//    {
//     type: 'input',
//     message: 'Enter the description of the project.',
//     name: 'description',
//    },
//    {
//     type: 'input',
//     message: 'Enter the description of the project.',
//     name: 'description',
//    },
//    {
//     type: 'input',
//     message: 'Enter the description of the project.',
//     name: 'description',
//    },
//    {
//     type: 'input',
//     message: 'Enter the description of the project.',
//     name: 'description',
//    }
]).then(data => {
    writeToFile('test.md', data.title);
    // generateMarkdown(fs.readFile('test.txt',  (err, data) => {
    //     if (err) throw err;
    //     console.log(data);
    // }));
})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, `# The title name is ${data}`, (err) => {
        if (err) throw err;
        console.log('worked');
     })
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
