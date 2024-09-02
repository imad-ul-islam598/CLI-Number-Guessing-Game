#! /usr/bin/env node
import inquirer from "inquirer";
// Welcome Message
console.log("\nWelcome to CLI number guessing Game\n");
console.log("\t Are You ready to PLAY. \t\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",
    },
]);
// Conditional Statements:
if (answer.userGuessedNumber == randomNumber) {
    console.log("Congratulation! You guessed a right number.");
}
else
    console.log("You guessed wrong number.");
