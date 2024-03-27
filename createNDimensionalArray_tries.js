function createNDimensionalArray(n, size) {
  // for (let i = 0; i <= n; i += 1) {
  //   const element = array[i];
  // }

  // console.log(
  //   Array(size)
  //     .fill(0)
  //     .map(() => Array(size).fill(0))
  // );

  // let newArr = new Array(size).fill(0);

  // for (let i = 0; i <= n; i += 1) {
  //   for (let j = 0; j <= n; j += 1) {
  //     x[i] = new Array(size).fill(0);
  //   }
  // }

  // let a = Array(size)
  //   .fill(0)
  //   .map(() => newArr);

  console.log(n);

  let firstArr = [];
  let newArr = new Array(3).fill(0);
  console.log('newArr:', newArr);

  firstArr = newArr.map(() => newArr);
  console.log('1:', firstArr);

  function createNextDimension(arr, dimens) {
    // arr.map((item) => {
    //   if (Array.isArray(item)) {
    //     return item.map(() => newArr);
    //   } else {
    //     return newArr;
    //   }
    // });
    // arr.map((item) => {

    let arr1 = arr.map(() => newArr);
    console.log('dimens - ', dimens);

    if (dimens <= 1) {
      // return arr1;
      console.log('dimens <= 1', arr1);
    } else {
      dimens -= 1;
      // return createNextDimension(arr1, dimens);
      console.log('dimens > 1', createNextDimension(arr1, dimens));
    }
    // });
  }

  console.log('2:', createNextDimension(firstArr, n));

  // firstArr = firstArr.map((item) => {
  //   if (Array.isArray(item)) {
  //     return item.map(() => newArr);
  //   } else {
  //     return newArr;
  //   }
  // });
  // new Array(3).fill(1));

  // firstArr = firstArr.concat([3, 4, 5]);
  // console.log(firstArr);

  // firstArr = firstArr.map(() => new Array(1).fill(1));
  // console.log(firstArr);

  // firstArr = firstArr.fill(0).map(() => newArr);

  // firstArr = n === 1 ? newArr : newArr.fill(0).map(() => newArr);

  // if (n === 1) {
  //   firstArr = newArr;
  // } else {
  //   n -= 1;
  //   firstArr = newArr.map(() => newArr);
  // }
  // firstArr.push(newArr);
  // console.log(firstArr);
  // console.log(newArr);
}

// createNDimensionalArray(2, 3);
createNDimensionalArray(2, 2);
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
