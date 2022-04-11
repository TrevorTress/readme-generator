// packages
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// question array
const questions = 
[
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log('Please enter your Project Title!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.'
    },
    {
        type: 'input',
        name: 'install',
        message: "PLease enter your project's installation instructions."
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter your projects usage information'
    },
    {
        type: 'input',
        name: 'contribution',
        message: "Please enter your project's contribution guidelines"
    },
    {
        type: 'input',
        name: 'test',
        message: "Please enter your project's test instructions"
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license for your project",
        choices: ["MIT", "BSD",  "GPL"]
    },
    {
        type: "input",
        name: "link",
        message: "Please add a link to your project's license"
    },
    {
        type: "input",
        name: "user",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "profileLink",
        message: "Please enter a link to your Github profile"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address"
    }   
];

// prompts the user with the questions array and returns the data as promise
const promptUser = mdData => {
    if(!mdData) {
        mdData = []
    }
    return inquirer.prompt(questions)
}

// initializes app
function init() {
    promptUser()
    .then(mdData => {
        console.log(mdData)
        const mdContent = generateMarkdown(mdData)
        fs.writeFile('./README.md', mdContent, err => {
            if (err) throw new Error(err)
            console.log('readme created!')
        })
    })
}
// Function call to initialize app
init()

// sample question w/ error handling
/*
{
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your name!');
        return false;
      }
    }
}
*/



/* GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/

// README SHOULD CONTAIN
