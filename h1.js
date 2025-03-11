const sum = (a, b) => a + b;


const greetUser = (name) => `Hello, ${name}!`;

const personInfo = (name, age) => `My name is ${name} and I am ${age} years old.`;


const asyncTask = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task completed successfully!");
        }, 2000);
    });
};

const userData = (name, age, favoriteNumbers) => {
    const updatedNumbers = [...favoriteNumbers, 99, 100]; 
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Hello, ${name}! You are ${age} years old. Your updated favorite numbers are: ${updatedNumbers.join(", ")}`);
        }, 2000);
    });
};


const name = prompt("Enter your name:");
const age = prompt("Enter your age:");
const num1 = prompt("Enter your first number:");
const num2 = prompt("Enter your second number:");
const nums = prompt("Enter your favorite numbers (comma-separated):");


const favoriteNumbers = nums.split(",").map(Number);

console.log("\nProcessing your data...\n");
console.log(`Sum: ${sum(Number(num1), Number(num2))}`); 
console.log(greetUser(name)); 
console.log(personInfo(name, age)); 


asyncTask().then(message => console.log(message));

userData(name, age, favoriteNumbers)
    .then(data => console.log(data))
    .catch(error => console.error(error));