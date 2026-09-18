const even = [2, 4, 6, 8]
let hey = even.entries()

console.log(hey); // Array Iterator
console.log(hey.next().value);
console.log(hey.next().value);
console.log(hey.next().value); // guves index and elemnt
console.log(hey.next().value);