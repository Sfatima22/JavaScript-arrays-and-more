//simple calculator using switch case

const readline = require("readline-sync");
const n1 = readline.question("Enter Number1 : ");
const n2=readline.question("Enter Number2 : ");
const operator=readline.question("Enter operator:");

let result;
switch(operator){
    case "+":
    result=n1+n2;
    break;
    case "-":
    result=n1-n2;
    break;
    case "*":
    result=n1*n2;
    break;
    case "/":
    result=n1/n2;
    break;
    case "%":
    result=n1%n2;
    break;
}console.log(`${n1} ${operator} ${n2} = ${result}`);