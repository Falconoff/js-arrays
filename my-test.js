function removeFalsyValues(arr) {
  // let newArr = [];
  // arr.map((value) => {
  //   if (value) {
  //     newArr.push(value);
  //   }
  // });

  return arr.filter((value) => value);
}

console.log(removeFalsyValues([0, false, 'cat', NaN, true, '']));
// => [ 'cat', true ]
console.log(removeFalsyValues([1, 2, 3, 4, 5, 'false']));
//  => [ 1, 2, 3, 4, 5, 'false' ]
console.log(removeFalsyValues([false, 0, NaN, '', undefined]));
//  => [ ]
