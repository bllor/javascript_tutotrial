//Prompt는 웹브라우저일 때만 받을 수 있고, 노드환경에서는 다르게 사용해야함
// let n = prompt();
// console.log(n);

// console.log(Number('3.21a'))

console.log(4 % 2);

let cond = false;

let value = "";

switch (cond) {
  case cond === true:
    value = "참";

    break;

  case !cond:
    value = "거짓";

    break;
}

console.log(value);

let arr = ["가", "나", "다", "라", "마"];

// a.splice(0, 0, "한글");

arr.splice(0, 2, "a", "b");
console.log(arr);

// test
