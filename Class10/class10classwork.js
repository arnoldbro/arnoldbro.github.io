let number = 23;
const

    y = x = 3 / 2 - 1

let plate === "pizza";

console.log(x, y, 3 / 2, "this is text" + plate);
console.log(`this is text ${3 / 2}      this is another text`)

•	Store a celsius temperature into a variable.Convert it to fahrenheit and output "NN°C is NN°F".
•	Now store a fahrenheit temperature into a variable.Convert it to celsius and output "NN°F is NN°C.

let celsiusTemperature = 0;
let convertToFahrenheit = 1.8 * celsiusTemperature + 32;

console.log(celsiusTemperature + "" + "is" + convertToFahrenheight);

let fahrenheitTemperature = 32;
let convertToCelsius = (fahrenheightTemperature - 32) * (5 / 6);

console.log(fahrenheightTemperature + "" + "is" + convertToCelsius);

let celsius = 30;
let celsiusInF = (celsius * 9) / 5 + 32

let fahrenheit = 2;
let fahrenheitInC = ((fahrenheit - 32) * 5) / 9;

console.log(`fahrenheit ${fahrenheit}F`)
console.log(`celsius ${fahrenheit}C`)



// let age = 16;
// const isAdult = age >= 16;
let age = 12;

if (age >= 16) {

    console.log("You can drive!")
} else {

    const yearLeft = 16 - age;
    console.log(`Wait for another ${yearLeft} years`)
}

birthYear = 1996;
let century;
if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}

console.log("")




const inputYear = "1996";
console.log(2021 - inputYear);
console.log(3992 / inputYear);
console.log(2 * inputYear);
console.log(2021 + inputYear);

console.log(2021 + Number(inputYear));
console.log(String(2021), 2021);
console.log("100" > 2);



console.log("I\'m" + " " + 16 + " " + "years old");
console.log(100 - "10" + " " + "years old");

let x = "11" + 1;
x = x - 1;
console.log(x)



// Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("John"));
// console.log(Boolean({}));
// // console.log(Boolean(""));

// zero problem
const balance = 0;
if (balance) {
    console.log("Good for now!")
}
else {
    console.log("Get a job.")
}

let age = 100;
if (age) {
    console.log("Got your age")
}
else {
    console.log("!!UNDEFINED")
};

==  ===, Boolean logic, Logical Operators

const age = 18;
// if (age === 18) console.log("You have become an adult =D")
if (age == 18) console.log("You have become an adult =D")
//else if (age)

// prompt("Guess the number")
const userInput = Number(prompt("Guess the number"));
// console.log(userInput);
// console.log(typeof userInput)

if (userInput === 10) {
    console.log("aye ten")
} else if (userInput === 8) {
    console.log("8 is also Matched!")
} else {
    console.log("!!!NOT MATCHED")
}
if (userInput !== 12) console.log("why not 8");


const driverLicense = true;
const goodVision = false;
const notDrunk = false;

// console.log(driverLicense && goodVision && !Drunk);


if (driverLicense && goodVision && notDrunk) {
    console.log("You qualify.")
} else if (!notDrunk) {
    console.log("Please step out of the vehicle.")
} else {
    console.log("You may not drive.")
};






