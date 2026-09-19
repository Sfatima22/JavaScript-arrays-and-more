//simple calculator using if else
// addition sub multiplication div mod
const readline = require("readline-sync");
const n1 = readline.question("Enter Number1 : ");
const n2=readline.question("Enter Number2 : ");
const operator=readline.question("Enter operator:");
if (operator == "+"){
    console.log(n1+n2);
} else if(operator=="-"){
    console.log(n1-n2);
}else if(operator=="*"){
    console.log(n1*n2);
}else if(operator=="/"){
    if (n2==0){
    console.log("undefined")
    }else{
    console.log(n1/n2);
}  
}else if(operator=="%"){
    console.log(n1%n2);
}else{
    console.log("invalid operator");
}

//enter the number
//enter the number 2
// enter operator
//print result
//2+2=4