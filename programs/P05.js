// check if num is even or odd
const readline = require("readline-sync");
const number=readline.question(`Enter a number:`);


if (number % 2==0) {
    console.log ("Number Is Even");
}else{
    console.log ("Number Is Odd");
}
