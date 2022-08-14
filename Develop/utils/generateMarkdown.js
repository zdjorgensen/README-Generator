// const indexjs = require('index.js');
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data.title);
  return `# ${data.title}

  <hr>

  ## Description
  ${data.description}

  <hr>

  ## Table of Contents
   <ul>
    <li> <a href> #installation </a> [Installation] </li>
    <li> <a href> #usage </a> [Usage] </li>
    <li> <a href> #credits </a> [Credits] </li>
    <li> <a href> #license </a> [License] </li>
    <li> <a href> #contributing </a> [Contributing] </li>
    <li> <a href> #tests </a> [Tests] </li>
    <li> <a href> #questions </a> [Questions] </li>
   </ul>

  <hr>

  ## Installation
  ${data.installation}

  <hr>

  ## Usage
  ${data.usage}

  <hr>

  ## Credits
  ${data.credits}

  <hr>

  ## License
  ${data.license} //Do something with the functions above with licesnses

  <hr>

  ## Contributing
  ${data.contributing}

  <hr>

  ## Tests
  ${data.tests}

  <hr>

  ## Questions
  ${data.questions}
`;

}

module.exports = generateMarkdown;
