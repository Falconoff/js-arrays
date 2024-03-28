// function createNDimensionalArray(n, size) {
//   let newArr = new Array(size).fill(0); // [ 0, 0, 0 ]
//   let newArr2 = newArr.map(() => newArr); //  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

//   // newArr2 = newArr2.map((item) => {
//   //   if (Array.isArray(item)) {
//   //     return item.map(() => newArr);
//   //   }

//   //   return newArr;
//   // });

//   function createNextArr(arr, makeNewArr, n) {
//     arr = arr.map((item) => {
//       if (n > 1) {
//         n -= 1;
//         return (arr = item.map(() => makeNewArr));
//       }

//       return makeNewArr;
//     });
//   }

//   return createNextArr(newArr2, newArr, n);

//   return newArr2;
// }

console.log(createNDimensionalArray(4, 3));

//
function createNDimensionalArray(n, size) {
  if (n === 1) return Array(size).fill(0);
  return createNDimensionalArray(n - 1, size).map(() =>
    createNDimensionalArray(n - 1, size)
  );
}
