function generateOdds(len) {
  let newArr = new Array(len);

  console.log(newArr.fill(1).map((value, index) => (value = index * 2 + 1)));
}

generateOdds(15);
// => [1, 3, 5, 7, 9]
