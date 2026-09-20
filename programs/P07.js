// program to check if a number is prime or not

const readline = require("readline-sync");
const num=readline.question(`Enter a num:`);
let isPrime=true ;
if (num===1) {
   console.log ("Neither prime nor composite ");
}
else if (num>1) {
    for (let i = 2; i <=Math.sqrt(num) ; i++) {
      if (num%i===0)
        isPrime=false;
    break;
    }
     if(isPrime){
        console.log(`${num} is a prime number`)
     }else{
        console.log(`${num} is not  prime`)
     }
}