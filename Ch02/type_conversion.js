// 문자형으로 변경하는 방법 : 변경할 변수를 String(var) var자리에 넣는다. 
// 숫자형으로 변경하는 방법 : 변경할 변수를 Number(var) var자리에 넣는다. 
// boolean으로 변경하는 방법 : 변경할 변수를 Boolean(var) var자리에 넣는다.
// --> Boolean(var)에서 var자리에 0, null, undefined, NaN, ""이 온다면 False, 그외에는 True로 반환된다. 
let value = true;
console.log(typeof value);

value = String(value);
console.log(typeof value);

let str = "123";
console.log(typeof str);
str = Number(str);
console.log(typeof str);