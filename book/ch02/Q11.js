let a = [
  ["a", null, 1, undefined],
  [NaN, true, "", 0],
];
// console.log("a", a);

//for문으로 5*4 이차원 배열을 만들어보세요. 배열의 요소는 모두 1로 넣습니다.
let b = [];
for (let i = 0; i < 4; i++) {
  c = [];
  for (let j = 0; j < 5; j++) {
    d = 1;
    c.push(d);
  }
  b.push(c);
}

console.log("b", b);
let qq = [None] * 5;
console.log("pp", qq);
