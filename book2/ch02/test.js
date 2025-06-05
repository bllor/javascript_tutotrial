function a() {
  console.log("Js");
}
function b(fc) {
  console.log("Hi");
  fc();
}
b(a);
//b(a())를 할 경우 b에 a가 전달되기 전에 a()가 먼저 실행이 된다
