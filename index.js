const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./Develop/utils/generateMarkdown"); // Adjust this path as necessary

// Questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPLv3", "BSD 3-Clause", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test instructions:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
    validate: input => input ? true : "GitHub username is required."
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: function(input) {
      // Provided regex for email validation
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!input) {
        return "Email address is required."; // Ensures the input is not empty
      } else if (!regex.test(input)) {
        return "Please enter a valid email address."; // Checks the input against the regex
      }
      return true; // Returns true if the input is valid
    }
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  const outputDir = path.join(process.cwd(), 'output');
  
  if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(path.join(outputDir, fileName), data);
  console.log("Successfully created README.md in the 'output' folder");
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateMarkdown(answers);
    writeToFile("README.md", readmeContent);
  });
}

// Start the application
init();
