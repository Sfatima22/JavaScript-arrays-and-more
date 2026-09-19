const arr = [
  "Java",
  "JavaScript",
  "Python",
  "C",
  "C++",
  "Kotlin",
  "Dart",
  "Bash",
  "C#",
  "Swift",
  "GO",
  "R",
  "PHP",
];

console.log(arr);
console.log("Using For Loop");

for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}
console.log("Using For Each");
arr.forEach((i, index) => {
  console.log(index + 1, i);
});