const arr = [[[1, 2, 3]]];

// console.log(arr[0][0][0]);

function getFalsyValuesCount(arr) {
  // return arr.filter((value) => value);
  // const initialValue = 0;
  return arr.reduce((total, currentValue) => {
    return currentValue ? total : (total += 1);
  }, 0);

  // let total = 0;
  // return arr.reduce((currentValue) => {
  //   return currentValue ? total : (total += 1);
  //   // if (currentValue) {
  //   //   return total;
  //   // }
  //   // total += 1;
  //   // return total;
  // }, total);
}

console.log(getFalsyValuesCount([]));
// => 0
console.log(getFalsyValuesCount([1, '', 3]));
// => 1
console.log(getFalsyValuesCount([-1, 'false', null, 0]));
// => 2
console.log(getFalsyValuesCount([null, undefined, NaN, false, 0, '']));
// => 6
