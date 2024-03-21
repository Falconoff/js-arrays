function selectMany(arr, childrenSelector) {
  // throw new Error('Not implemented');

  return arr.flatMap(childrenSelector);
}

console.log(
  selectMany(
    [
      [1, 2],
      [3, 4],
      [5, 6],
    ],
    (x) => x
  )
);
// => [1, 2, 3, 4, 5, 6]
console.log(selectMany(['one', 'two', 'three'], (x) => x.split('')));
// => ['o', 'n', 'e', 't', 'w', 'o', 't', 'h', 'r', 'e', 'e']

// // console.log(new Array([[0], [2]]));

// function createNDimensionalArray(n, size) {
//   // for (let i = 0; i <= n; i += 1) {
//   //   const element = array[i];
//   // }

//   // console.log(
//   //   Array(size)
//   //     .fill(0)
//   //     .map(() => Array(size).fill(0))
//   // );

//   let x = new Array(size);

//   for (let i = 0; i < n; i += 1) {
//     x[i] = new Array(size).fill(0);
//   }
//   console.log(x);
// }

// createNDimensionalArray(2, 3);
// createNDimensionalArray(3, 2);
// createNDimensionalArray(4, 2);
// createNDimensionalArray(4, 4);
// // console.log(
// //   Array(4)
// //     .fill(0)
// //     .map((x) => Array(5).fill(0))
// // );

// /*
// var x = new Array(10);

// for (var i = 0; i < x.length; i++) {
//   x[i] = new Array(3);
// }

// console.log(x);
// */
