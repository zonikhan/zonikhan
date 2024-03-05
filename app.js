import inquirer from "inquirer";
let anwers = await inquirer.prompt({
    name: "age",
    type: "number",
    message: "Enter your age: "
});
console.log("Insha ALLAH, after" + (60 - anwers.age) + "years you will be 60 years old");
