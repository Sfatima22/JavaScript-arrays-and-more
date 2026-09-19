const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(arr.length);


let data = {
  name: "Suhail",
  age: 20,
  isAlive: true,
  favnum: [10, 20, 11],
  address: {
    city: "Hyderabad",
  },
};

for (let i in data) {
  console.log(`Key is ${i} : ${data[i]} is Value`);
}