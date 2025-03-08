const a = () => {
  console.log("a 출력이지롱");
};

const b = setTimeout(a, 1000);
clearTimeout(b);

const timerId = setTimeout(() => {
  console.log("0초 뒤에 실행");
}, 0);
console.log("내가 먼저");

const a1 = 1;
const func = () => {
  console.log(a1);
};
func();
