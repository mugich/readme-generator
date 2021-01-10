// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
     
  switch (license) {
  
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
     
    
    case "Apache license 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
     
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      
    default: return "";      
  } 
  
}
var badge = renderLicenseBadge();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ${badge}
  [![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})
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
