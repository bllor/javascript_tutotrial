//배열에 하나라도 null이 아니면 true를 반환하고, 아니면 false를 반환하라.
const array = [null, "hello", null, undefined, false];

console.log(array.some((v) => v !== null));
console.log(!array.every((v) => v === null));
for (let i = 0; i < array.length; i++) {
  if (array[i] !== null) {
    console.log(true);
    return;
  }
}
