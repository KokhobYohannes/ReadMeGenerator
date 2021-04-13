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
      name: "title",
    },
    {
      type: "input",
      message: "how do you install your app?",
      name: "installation",
    },
    {
      type: "input",
      message: "Instructions to follow",
      name: "instructions",
    },
    {
      type: "input",
      message: "Any credits?",
      name: "installation",
    },
    {
      type: "input",
      message: "How do you use your app?",
      name: "usage",
    },
    {
      type: "list",
      message: "What license did you use?",
      name: "license",
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
      name: "git",
    },
    {
      type: "input",
      message: "E-mail",
      name: "email",
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
