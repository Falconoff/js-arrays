function createNDimensionalArray(n, size) {
  let newArr = new Array(size).fill(0); // [ 0, 0, 0 ]
  let newArr2 = newArr.map(() => newArr); //  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]
  // let newArr3 = newArr2.map(() => newArr); //  [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ]

  newArr2 = newArr2.map((item) => {
    if (Array.isArray(item)) {
      return item.map(() => newArr);
    }

    return newArr;
  });

  return newArr2;
}

console.log(createNDimensionalArray(2, 3));
