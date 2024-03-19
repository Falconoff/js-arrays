function distinct(arr) {
  const newSet = new Set();

  // arr.map((element) => {
  //   newSet.add(element);
  // });

  return Array.from(newSet);
}

console.log(distinct([1, 2, 3, 3, 2, 1]));
//  => [ 1, 2, 3 ]
console.log(distinct(['a', 'a', 'a', 'a']));
//  => [ 'a' ]
console.log(distinct([1, 1, 2, 2, 3, 3, 4, 4]));
//  => [ 1, 2, 3, 4]
console.log(distinct([]));
//  => []
