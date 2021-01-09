// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = () => {}
 




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)]

  ## Description 

  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contribution](#contribution)
  * [Test](#tests)
  * [Questions](#question)
  
  ## Installation
  To install necessary dependencies, run the following command:

   ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution guidelines

  ${data.contribution}

  ## Test
  To run tests, run the following command:

  ${data.test} 

  ## License
  This project is licensed under ${data.license} license

  ## Questions
  if you have any questions about the repo, open an issue or contact me directly at ${data.email}. 
  You can find more of my work at [${data.username}](https://github.com/${data.username}/) 
  
  
  
`;

}


module.exports = generateMarkdown;
