const find = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
};
console.log(find([1, 3, 5, 7], (v, i) => v > 1));
////////////////////

const filter = (array, callback) => {
  let arr1 = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      arr1.push(array[i]);
    }
  }
  return arr1;
};
let arr = filter([1, 3, 5, 7], (v, i) => {
  return v > 1;
});

console.log(arr);
