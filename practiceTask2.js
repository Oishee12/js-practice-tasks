let weight = 45;
const height = 1.524;

let bmi = weight / (height*height);
let bmiValue = parseFloat(bmi.toFixed(2));
// console.log(bmi);
console.log(bmiValue);

if(bmi < 18.5){
    console.log("You are underweight");
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log('You are normal')
}
else if(bmi >= 25 && bmi <= 29.9){
    console.log('You are overweight')
}
else{
    console.log('You are obese')
}