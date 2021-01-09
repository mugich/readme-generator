// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs'); 
const generateMark = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your Github username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
  },
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
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
  {
    type: 'list',
    message: 'Choose your license:',
    name: 'license',
    choices: ['MIT', 'Apache license 2.0', 'Boost Software License 1.0', 'ISC'],
  },
];


// TODO: Create a function to initialize app
const promptUser = () => {
  inquirer.prompt([...questions]).then((response) => {
    writeToFile("readme.md", generateMark(response))
  });
}

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("Your file has been created");
  });
};


// Function call to initialize app
promptUser();



