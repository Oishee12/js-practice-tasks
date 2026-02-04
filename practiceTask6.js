/***
Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let age = 53;
if (age < 10) {
    console.log('You are a kid and you can eat for free!');
}
else if(age <= 59){
    console.log('You need to buy ticket. The ticket fare is: 800 tk');
}
else{
    let discount = 800 * 15 / 100;
    let discountPrice = 800 - discount;
    console.log('You are an a respective senior citizen. You got 15% discount. The ticket fare is for you is: ', discountPrice);
}