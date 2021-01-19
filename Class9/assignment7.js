

const ageJohn = 2021 - 1998;
const ageLucas = 2021 - 1996;
const currentYear = 2021;


// Method #1//

let massJohn = 92;
let heightJohn = 1.95;
let massLucas = 78;
let heightLucas = 1.69;

const firstNameJohn = "John";
var BMIJohn = massJohn / heightJohn * 2;
BMIJohn = BMIJohn.toFixed(2);


const firstNameLucas = "Lucas";
var BMILucas = massLucas / heightLucas * 2;
BMILucas = BMILucas.toFixed(2);
var lucasHigherBMI = BMILucas > BMIJohn;

console.log("Method 1:", "\n", ' ' + firstNameJohn + "'s BMI is" + " " + BMIJohn + ' ' + "kg/m", firstNameLucas + "'s BMI is" + " " + BMILucas + ' ' + "kg/m", "\n", "Lucas has a higher BMI than John: " + lucasHigherBMI);


// Method #2//

var BMIJohnTwo = massJohn / (heightJohn * heightJohn);
BMIJohnTwo = BMIJohnTwo.toFixed(2);


var BMILucasTwo = massLucas / (heightLucas * heightLucas);
BMILucasTwo = BMILucasTwo.toFixed(2);
var lucasHigherBMITwo = BMILucasTwo > BMIJohnTwo;

console.log("Method 2:", "\n", ' ' + firstNameJohn + "'s BMI is" + " " + BMIJohnTwo + ' ' + "kg/m^2", firstNameLucas + "'s BMI is" + " " + BMILucasTwo + ' ' + "kg/m^2", "\n", "Lucas has a higher BMI than John: " + lucasHigherBMITwo);

//Template literal Practice//

let massJohnNew = 85;
let heightJohnNew = 1.76;
let massLucasNew = 95;
let heightLucasNew = 1.88;

var BMIJohnNew = massJohnNew / heightJohnNew * 2;
BMIJohnNew = BMIJohnNew.toFixed(2);

let DataTwoSummary = `Lucas and John are friends, Lucas is ${heightLucasNew} m tall and John is ${heightJohnNew} m tall. So John has higher BMI than Lucas, that is ${BMIJohnNew} kg/m.`;


console.log("Data Two Summary:", "\n", " " + DataTwoSummary);



