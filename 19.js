const food = ["cakes", "Momos", "rice", "matcha", "doner"];

function search(num) {

  for (let i of food) {

    let arr = [];

    arr.push(i);

    if (arr[0][0] == num[0]) {
      console.log(arr.join("M"));
    }

  }
}
search("M");