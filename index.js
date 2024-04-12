// // que-----------------------------------1------------------------------------


// let income = +prompt("Enter your income")
// let tax;
// if (income > 0 && income < 10000) {
//     tax = income * 5 / 100;
//     console.log(tax);
// } else if (income > 10001 && income < 20000) {
//     tax = income * 10 / 100;
//     console.log(tax);
// } else if (income > 20001 && income > 30000) {
//     tax = income * 15 / 100;
//     console.log(tax);
// } else if (income > 30000) {
//     tax = income * 20 / 100;
//     console.log(tax);
// } else {
//     console.log(tax);
// }


// que--------------------------------------------2-----------------------------------

// let day = +prompt("enter your day")
// if (day === 0) {
//     console.log("sunday");
// } else if (day === 1) {
//     console.log("monday");
// } else if (day === 2) {
//     console.log("tusday");
// } else if (day === 3) {
//     console.log("wensday");
// } else if (day === 4) {
//     console.log("thursday");
// } else if (day === 5) {
//     console.log("firday");
// } else if (day === 6) {
//     console.log("satrday");
// } else {
//     console.log("not a valid day");
// }


// que------------------------------------3---------------------------------

// let product = +prompt("pricerange")
// let finalprice;
// if (product > 0 && product < 100) {
//     finalprice = product * 5 / 100 - product
//     console.log(finalprice);
// } else if (product > 101 && product < 500) {
//     finalprice = product * 10 / 100 - product
//     console.log(finalprice);
// } else {
//     finalprice = product * 15 / 100 - product
//     console.log(finalprice);
// }


// que---------------------------------4--------------------------------

let weight = +prompt("Enter your weight")
let height = +prompt("Enter your height miters")
let bmi;

bmi = weight / (height * height)
if (bmi <= 18.5) {
    console.log(bmi,"underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log(bmi,"normal");
} else if (bmi >= 25 && bmi <= 29.9) {
    console.log(bmi,"overweight");
} else {
    console.log(bmi,"obese");
}





