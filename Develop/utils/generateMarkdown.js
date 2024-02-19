// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    GPLv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD 3-Clause": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    None: "",
  };
  return badges[license] || "";
}

// Function that returns the license link
function renderLicenseLink(license) {
  const links = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    GPLv3: "https://www.gnu.org/licenses/gpl-3.0",
    "BSD 3-Clause": "https://opensource.org/licenses/BSD-3-Clause",
    None: "",
  };
  return links[license] || "";
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  if (license && license !== "None") {
    return `## License\nThis project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
  return "";
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${data.license !== 'None' ? '- [License](#license)' : ''}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please reach out via:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;