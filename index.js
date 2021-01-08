// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'Enter your project title:',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Enter your project description:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'Installation instruction',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'Enter usage information',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'Contribution guidelines',
    name: 'contribution',
  },
  {
    type: 'input',
    message: 'Enter your test instruction',
    name: 'test',
  },
  // {
  //   type: 'list',
  //   message: 'Choose your license:',
  //   choices: ['MIT', '']
  // },
];



const promptUser = () => {
  inquirer.prompt([...questions]).then((response) => {
    writeToFile("readme.md", generateMarkdown(response))
  });
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Your file has been created");
  });
};

promptUser();

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
