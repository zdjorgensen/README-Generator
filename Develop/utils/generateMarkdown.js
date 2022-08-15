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
  return `<div id="top"></div>

  # ${data.title}

  ## Description
  ${data.description}

  <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>

  ## Table of Contents
   <ul>
    <li> <a href="#installation"> [Installation]</a> </li>
    <li> <a href="#usage"> [Usage]</a> </li>
    <li> <a href="#credits"> [Credits]</a> </li>
    <li> <a href="#contributing"> [Contributing]</a> </li>
    <li> <a href="#tests"> [Tests]</a> </li>
    <li> <a href="#questions"> [Questions]</a> </li>
    <li> <a href="#license"> [License]</a> </li>
   </ul>

   <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>
  
  <div id="installation"></div>

  ## Installation 
  ${data.installation}

  <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>

  <div id="usage"></div>

  ## Usage
  ${data.usage}

  <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>

  <div id="contributing"></div>

  ## Contributing
  ${data.contributing}

  <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>

  <div id="tests"></div>

  ## Tests
  ${data.tests}

  <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>

  <div id="questions"></div>

  ## Questions
  GitHub: ${data.github}
  
  Email: ${data.email}

  <p align="right">(<a href="#top">Back to Top</a>)</p>

  <hr>

  <div id="license"></div>

  ## License
  ${data.license} //Do something with the functions above with licesnses

  <p align="right">(<a href="#top">Back to Top</a>)</p>
  `;

}

module.exports = generateMarkdown;
