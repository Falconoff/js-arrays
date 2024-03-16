function getAverage(arr) {
  if (arr.length < 1) {
    return 0;
  }
  return (
    Math.round(
      (arr.reduce((accum, current) => accum + current, 0) / arr.length) * 100
    ) / 100
  );
}

getAverage([]);
// => 0
getAverage([1, 2, 3]);
//  => 2
getAverage([-1, 1, -1, 1]);
// => 0
console.log(Math.round(getAverage([2, 3, 3]) * 100) / 100);
