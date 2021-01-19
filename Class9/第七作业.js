
// 第一//

let 约翰的质量 = 92;
let 约翰的身高 = 1.95;
let 卢卡斯的质量 = 78;
let 卢卡斯的身高 = 1.69;

const 英文名字John = "约翰";
var 约翰的BMI = 约翰的质量 / 约翰的身高 * 2;
约翰的BMI = 约翰的BMI.toFixed(2);


const 英文名字Lucas = "卢卡斯";
var 卢卡斯的BMI = 卢卡斯的质量 / 卢卡斯的身高 * 2;
卢卡斯的BMI = 卢卡斯的BMI.toFixed(2);
var 卢卡斯的HigherBMI = 卢卡斯的BMI > 约翰的BMI;

console.log("第一:", "\n", 英文名字John + "的BMI是" + 约翰的BMI + "kg/m.", 英文名字Lucas + "的BMI是" + 卢卡斯的BMI + "kg/m.", "\n", "卢卡斯的BMI高于约翰的: " + 卢卡斯的HigherBMI);


// 第二//

var 约翰的BMI二 = 约翰的质量 / (约翰的身高 * 约翰的身高);
约翰的BMI二 = 约翰的BMI二.toFixed(2);


var 卢卡斯的BMI二 = 卢卡斯的质量 / (卢卡斯的身高 * 卢卡斯的身高);
卢卡斯的BMI二 = 卢卡斯的BMI二.toFixed(2);
var 卢卡斯的HigherBMI二 = 卢卡斯的BMI二 > 约翰的BMI二;

console.log("第二:", "\n", + 英文名字John + "的BMI是" + 约翰的BMI二 + "kg/m^2.", 英文名字Lucas + "的BMI是" + 卢卡斯的BMI二 + "kg/m^2.", "\n", "卢卡斯的BMI高于约翰的: " + 卢卡斯的HigherBMI二);

//Template literal Practice//

let 新约翰的质量 = 85;
let 新约翰的身高 = 1.76;
let 新卢卡斯的质量 = 95;
let 新卢卡斯的身高 = 1.88;

var 新约翰的BMI = 新约翰的质量 / 约翰的身高 * 2;
新约翰的BMI = 新约翰的BMI.toFixed(2);

let 新数据 = `卢卡斯和约翰是朋友. 卢卡斯身高${新卢卡斯的身高}m. 约翰身高${约翰的身高}m. 因此，约翰的BMI高于卢卡斯的. 它是${新约翰的BMI}kg/m.`;


console.log("新数据:", "\n" + 新数据);
