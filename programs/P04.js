// program that checks if the number is positive, negative or zero

const readline = require("readline-sync");
let input=readline.question(`Enter a input:`);
function checkNumber(input){
    let num
    try {
        num=Number(input)
    } catch  {
       console.log("invalid input") 
    }
// if (num>0) {
//     console.log("The Number Is Positive");
    
// }     else if (num<0) {
//    console.log("The Number is Negative");
// } else {
//     console.log("The Number Is zero");
// } 
// console.log(typeof num)
if (typeof input==="boolean" ||input==="null" || input==="undefined" || (typeof input ==="string" && input.trim()==="") || Number.isNaN(num) ){
return "Not A Number";
}
if (num>0) {console.log("number is positive")}
    if(num<0) {console.log("number is negative")}
    if (num==0) {console.log("number is zero")}
}
checkNumber(input);