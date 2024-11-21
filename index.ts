#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter Your first number", type: "number", name: "FirstNumber" },
  { message: "Enter Your Second number", type: "number", name: "SecondNumber" },
  {
    message: "Select one of operators to perform action",
    type: "list",
    name: "operator",
    choices: ["ADDITION", "SUBTRACTION", "MULTIPLICATION", "DIVISION" , ]
  },
]);
// Conditional Statement
if (answer.operator === "ADDITION") {
  console.log(answer.FirstNumber + answer.SecondNumber);

} else if (answer.operator === "SUBTRACTION") {
  console.log(answer.FirstNumber - answer.SecondNumber);
} else if (answer.operator === "MULTIPLICATION") {
  console.log(answer.FirstNumber * answer.SecondNumber);
} else if (answer.operator === "DIVISION") {
  console.log(answer.FirstNumber / answer.SecondNumber);
}else {
  ("Please select correct operator");
}
