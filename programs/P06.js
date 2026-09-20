// program to find the largest among three numbers
const readline = require("readline-sync");
const num1=readline.question(`Enter a num1:`);
const num2=readline.question(`Enter a num2:`);
const num3=readline.question(`Enter a num3:`);
let largest
if (num1>=num2 && num1>=num3  ) {
   largest=num1;
}else if (num2>=num1 && num2>=num3) {
    largest=num2;
}else{
    largest=num3;
}
console.log(`largest is ${largest}`)