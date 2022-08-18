// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let choice;
let link;
let badge;

function renderLicenseBadge(choice) {
  if(choice == "undefined") {
    return "";
  }
  // Testing
  if(choice == '0'){
    badge = "Cool Badge";
    return badge;
  }else if(choice == '1'){
    badge = "Cooler Badge";
    return badge;
  } else if(choice == '2'){
    badge = "Coolerist Badge";
    return badge;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(choice) {
  console.log(choice, 'Actually here');
  if(choice == "undefined") {
    return "";
  }

  if(choice == '0'){ //BSD-3 License link
    link = 'https://choosealicense.com/licenses/bsd-3-clause/';
    return link;
  }else if(choice == '1'){ //MIT License link
    link = "https://choosealicense.com/licenses/mit/";
    return link;
  } else if(choice == '2'){ //GPL License link
    link = "https://choosealicense.com/licenses/gpl-3.0/";
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// choice 0 = BSD, 1 = MIT, 2 = GPL
function renderLicenseSection(data) {
  let license = data.license;
  if(license !== "No License") {
    if(license == 'BSD 3-Clause License') {
      choice = '0';
      return choice;
    } else if(license == 'MIT License') {
        choice = '1';
        return choice;
    } else if(license == 'GPL License') {
        choice = '2';
        return choice;
    }
  }
  return license;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseSection(data);
  return `<div id="top"></div>

  # ${data.title} ${renderLicenseBadge(choice)}

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
  ${data.license}

  License Link: ${renderLicenseLink(choice)}

  <p align="right">(<a href="#top">Back to Top</a>)</p>
  `;

}


module.exports = generateMarkdown;
