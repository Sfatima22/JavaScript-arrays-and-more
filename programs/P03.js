const readline = require("readline-sync");
const string=readline.question(`Enter a string:`);
//BOX

function reverseString(string){
    let newString="";

    for(let i=string.length-1; i>=0; i--){
        newString += string[i]
    }
    return newString;
}
const  result=reverseString(string)
console.log(result);