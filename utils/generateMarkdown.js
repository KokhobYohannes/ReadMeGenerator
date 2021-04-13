// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}
https://github.com/${data.Username}/${data.Title}
# Description
${data.Description}
# Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
# Contributing
​Contributors: ${data.Contributing}
* [Questions](#questions)
# Installation
The following necessary dependencies must be installed to run the application properly: ${data.Installation}
# Usage
In order to use this app, ${data.Usage}
# License
This project is licensed under the ${data.License} license. 
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
# Questions
If you have any questions or suggestions for the repository, please feel free to contact me ${data.Username} directly at : ${data.Email}.
`;
}

module.exports = generateMarkdown;
