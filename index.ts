#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.yellow("*".repeat(60)));
console.log(
  chalk.bold.magenta.italic("   \n    \t \t WELCOME TO ADVENTURE GAME \n ")
);
console.log(chalk.bold.yellow("*".repeat(60)));

// class of plyer & opponent
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}
//  player & opponent select
let Player1 = await inquirer.prompt({
  name: "name",
  type: "input",
  message: "Please Enter Your Name",
});

let opponent = await inquirer.prompt({
  name: "select",
  type: "list",
  message: "Please select Your Opponent",
  choices: ["SuperMan", "IronMan", "Zombie"],
});
//  gather data
let p1 = new Player(Player1.name);
let o1 = new Opponent(opponent.select);

do {
  // SuperMan
  if (opponent.select === "SuperMan") {
  }
  let ask = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: "Please select Your Opponent",
    choices: ["Attack", "Drink Portion", "Run For Your Life.. ."],
  });
  if (ask.opt === "Attack") {
    let num = Math.floor(Math.random() * 2);
    if (num > 0) {
      p1.fuelDecrease();
      console.log(
        chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}% Remaining.. .`)
      );
      console.log(
        chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}% Remaining.. .`)
      );
      if (p1.fuel <= 0) {
        console.log(
          chalk.red.bold.italic("You Loose Your Game, Better Luck Next Again!")
        );
      }
    }
    if (num <= 0) {
      o1.fuelDecrease();
      console.log(
        chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}% Remaining.. .`)
      );
      console.log(
        chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}% Remaining.. .`)
      );
    }
    if (o1.fuel <= 0) {
      console.log(chalk.green.bold.italic("You Won!"));
      process.exit();
    }
  }
  if (ask.opt === "Drink Portion") {
    p1.fuelIncrease();
    console.log(
      chalk.bold.italic.yellow(
        `You Drink The Health Portion Your Fuel Is ${p1.fuel}%`
      )
    );
  }
  if (ask.opt === "Run For Your Life.. .") {
    console.log(
      chalk.magenta.bold.italic("You Loose Your Game, Better Luck Next Again!")
    );
    process.exit();
  }
  //  IronMan
  if (opponent.select === "IronMan") {
  }
  let ask1 = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: "Please select Your Opponent",
    choices: ["Attack", "Drink Portion", "Run For Your Life.. ."],
  });
  if (ask1.opt === "Attack") {
    let num = Math.floor(Math.random() * 2);
    if (num > 0) {
      p1.fuelDecrease();
      console.log(
        chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}% Remaining.. .`)
      );
      console.log(
        chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}% Remaining.. .`)
      );
      if (p1.fuel <= 0) {
        console.log(
          chalk.red.bold.italic("You Loose Your Game, Better Luck Next Again!")
        );
      }
    }
    if (num <= 0) {
      o1.fuelDecrease();
      console.log(
        chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}% Remaining.. .`)
      );
      console.log(
        chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}% Remaining.. .`)
      );
    }
    if (o1.fuel <= 0) {
      console.log(chalk.green.bold.italic("You Won!"));
      process.exit();
    }
  }
  if (ask1.opt === "Drink Portion") {
    p1.fuelIncrease();
    console.log(
      chalk.bold.italic.yellow(
        `You Drink The Health Portion Your Fuel Is ${p1.fuel}%`
      )
    );
  }
  if (ask1.opt === "Run For Your Life.. .") {
    console.log(
      chalk.magenta.bold.italic("You Loose Your Game, Better Luck Next Again!")
    );
    process.exit();
  }
  // Zombie
  if (opponent.select === "Zombie") {
  }
  let ask2 = await inquirer.prompt({
    name: "opt",
    type: "list",
    message: "Please select Your Opponent",
    choices: ["Attack", "Drink Portion", "Run For Your Life.. ."],
  });
  if (ask2.opt === "Attack") {
    let num = Math.floor(Math.random() * 2);
    if (num > 0) {
      p1.fuelDecrease();
      console.log(
        chalk.bold.red(`${p1.name} Fuel is ${p1.fuel}% Remaining.. .`)
      );
      console.log(
        chalk.bold.green(`${o1.name} Fuel is ${o1.fuel}% Remaining.. .`)
      );
      if (p1.fuel <= 0) {
        console.log(
          chalk.red.bold.italic("You Loose Your Game, Better Luck Next Again!")
        );
      }
    }
    if (num <= 0) {
      o1.fuelDecrease();
      console.log(
        chalk.bold.red(`${o1.name} Fuel is ${o1.fuel}% Remaining.. .`)
      );
      console.log(
        chalk.bold.green(`${p1.name} Fuel is ${p1.fuel}% Remaining.. .`)
      );
    }
    if (o1.fuel <= 0) {
      console.log(chalk.green.bold.italic("You Won!"));
      process.exit();
    }
  }
  if (ask2.opt === "Drink Portion") {
    p1.fuelIncrease();
    console.log(
      chalk.bold.italic.yellow(
        `You Drink The Health Portion Your Fuel Is ${p1.fuel}%`
      )
    );
  }
  if (ask2.opt === "Run For Your Life.. .") {
    console.log(
      chalk.magenta.bold.italic("You Loose Your Game, Better Luck Next Again!")
    );
    process.exit();
  }
} while (true);
