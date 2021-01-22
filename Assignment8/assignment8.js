
//A://

let gameOneNets = 96;
let gameTwoNets = 108;
let gameThreeNets = 89;

const nets = (gameOneNets + gameTwoNets + gameThreeNets) / 3;

let gameOneKnicks = 88;
let gameTwoKnicks = 91;
let gameThreeKnicks = 110;

const knicks = (gameOneKnicks + gameTwoKnicks + gameThreeKnicks) / 3;

if (nets > knicks) {
    console.log("Nets")
} else if (nets < knicks) {
    console.log("Knicks")
} else {
    console.log("Draw")
};

//B://


let bill = 275;

switch (true) {
    case (bill < 30) || (bill > 300):
        console.log(`The first bill was ${bill}, the tip was ${bill * .20}, and the total value ${bill * 1.20}`)
        break;

    case (bill >= 30 && bill <= 300):
        console.log(`The first bill was ${bill}, the tip was ${bill * .15}, and the total value ${bill * 1.15}`)
        break;
};

let billTwo = 28;


switch (true) {
    case (billTwo < 30) || (billTwo > 300):
        console.log(`The second bill was ${billTwo}, the second tip was ${billTwo * .20}, and the second total value ${billTwo * 1.20}`)
        break;

    case (billTwo >= 30 && billTwo <= 300):
        console.log(`The second bill was ${billTwo}, the second tip was ${billTwo * .15}, and the second total value ${billTwo * 1.15}`)
        break;
};

let billThree = 430;

switch (true) {
    case (billThree < 30) || (billThree > 300):
        console.log(`The third bill was ${billThree}, the third tip was ${billThree * .20}, and the third total value ${billThree * 1.20}`)
        break;

    case (billThree >= 30 && billThree <= 300):
        console.log(`The third bill was ${billThree}, the third tip was ${billThree * .15}, and the third total value ${billThree * 1.15}`)
        break;
};


//C://

let celsius = 30;
let celsiusInF = (celsius * 9) / 5 + 32;

let fahrenheit = 2;
let fahrenheitInC = ((fahrenheit - 32) * 5) / 9;

console.log(`${celsius}C is ${celsiusInF}F`, "\n", `${fahrenheit}F is ${fahrenheitInC}C`);





