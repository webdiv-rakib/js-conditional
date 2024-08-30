/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const age = 9;
const student = true;
const ticketPrice = 800;

if (age < 10){
    console.log("Ticket Free");
}
else if(!student){
    const discount = ticketPrice * 50 / 100;
    console.log(discount);
}
else if(age >= 60){
    const discount = ticketPrice * 15 / 100;
    console.log(discount);
}
else{
    console.log("Regular ticket fare: 800tk");
}