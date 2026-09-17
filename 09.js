const arr = ["zero", "one", "two"]

console.log(Object.assign({}, arr));

const arr2 = [["name", "fatima"], ['age', 21], ["isAlive", true]]
console.log(Object.fromEntries(arr2)) //returns an obj created by key value pairs