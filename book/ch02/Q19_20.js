const array = [1, 3, 5, 7];

for (let i = 0; i < array.length; i++) {
  console.log(`${array[i]},${i} `);
}

let a = Array(5)
  .fill(1)
  .map((v, i) => i * 2 + 3);

console.log("a", a);
