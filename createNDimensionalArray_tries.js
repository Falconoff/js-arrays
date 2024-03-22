function createNDimensionalArray(n, size) {
  // for (let i = 0; i <= n; i += 1) {
  //   const element = array[i];
  // }

  // console.log(
  //   Array(size)
  //     .fill(0)
  //     .map(() => Array(size).fill(0))
  // );

  let x = new Array(size);

  // for (let i = 0; i <= n; i += 1) {
  //   for (let j = 0; j <= n; j += 1) {
  //     x[i] = new Array(size).fill(0);
  //   }
  // }

  let a = Array(size)
    .fill(0)
    .map((x) => Array(size).fill(0));

  console.log(a);

  // let firstArr = [];
  // let newArr = new Array(size).fill(0);

  // console.log(newArr);
  // firstArr.push(newArr);
  // console.log(firstArr);
}

createNDimensionalArray(2, 3);
createNDimensionalArray(3, 2);
// createNDimensionalArray(4, 2);
// createNDimensionalArray(4, 4);

// console.log(
//   Array(4)
//     .fill(0)
//     .map((x) => Array(5).fill(0))
// );

/*
var x = new Array(10);

for (var i = 0; i < x.length; i++) {
  x[i] = new Array(3);
}

console.log(x);
*/
