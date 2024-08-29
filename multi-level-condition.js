/**
 * Multi-Level-Condition
 * 
 */

// const price = 2000;

// if(price >= 4000){
//     const discount = price * 10 /100;
//     console.log(discount);
// }
// else{
//     console.log("You got no discount");
// }

// const carPrice = 10000;

// if (carPrice >= 4000){
//     const discount = carPrice * 10 / 100;
//     const payAmount = carPrice - discount;
//     console.log(payAmount);
// }

const laptopPrice = 4000;
if (laptopPrice >= 7000) {
    // 10% discount
    const discount = laptopPrice * 10 / 100;
    const payAmount = laptopPrice - discount;
    console.log(payAmount);
}
else if (laptopPrice >= 5000) {
    // 5% discount
    const discount = laptopPrice * 5 / 100;
    const payAmount = laptopPrice - discount;
    console.log(payAmount);

}
else {
    console.log("Will Pay full price");
}