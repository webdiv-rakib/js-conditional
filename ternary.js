/**
 * Ternary --> Three parts
 * 
 *      ?      :
 *  condition ? do something when true : do something when false 
 */

const age = 18;

// Normal if-else

// if (age >=18){
//     console.log("You can vote.");
// }
// else {
//     console.log("You can't vote.");
// }

// Simple ternary
// age >= 18 ? console.log("Vote Dio") : console.log("Vote dite parba na");

let price = 500;
const isLeader = true;

if (isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price);

price = isLeader === false ? 0 : price + 100;
console.log(price);

// Optional: semi-advanced ternary

