function getIntervalArray(start, end) {
  // const array = [];
  // for (let i = start; i <= end; i += 1) {
  //   array.push(i);
  // }
  // console.log(array);

  const array = [];

  const arrLength = end - start + 1;

  array.length = arrLength;
  let rez1 = array.fill(start).map((value, index) => value + index);

  console.log(arrLength);
  // console.log(array);
  console.log(rez1);
  console.log(rez2);

  // console.log(Array.from('foo'));
  // console.log(Array.from(start));
}

getIntervalArray(1, 6);
getIntervalArray(-2, 2);
// getIntervalArray(0, 100);
// getIntervalArray(3, 3);
