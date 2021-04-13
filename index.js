const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

const writeFileAsync = util.promisify(fs.writeFile);
const promptUser = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What's the project title?",
      name: "Title",
    },
    {
      type: "input",
      message: "Describe your app:",
      name: "Description",
    },
    {
      type: "input",
      message:
        "What does the user need to install to run this app (ie...dependencies)?",
      name: "Installation",
    },
    {
      type: "input",
      message: "Table of Contents.",
      name: "Table of Contents",
    },
    {
      type: "input",
      message: "Any credits?",
      name: "Contributing",
    },
    {
      type: "input",
      message: "How do you use your app?",
      name: "Usage",
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "License",
      choices: [
        "The MIT License",
        "The GPL License",
        "Apache License",
        "All of the above",
        "None of the above",
      ],
    },
    {
      type: "input",
      message: "Github Username",
      name: "Username",
    },
    {
      type: "input",
      message: "E-mail",
      name: "Email",
    },
  ]);
};
const init = async () => {
  console.log("Hello!");
  try {
    const data = await promptUser();
    const readme = generateMarkdown(data);
    await writeFileAsync("README.md", readme);
    console.log("readme.MD succesfully generated");
  } catch (err) {
    console.log(err);
  }
};

init();
