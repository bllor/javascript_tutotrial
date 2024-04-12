// nullish 병합연산자 ?? 를 사용하면 짧은 문법으로 여러 피연산자 중 그 값이 확정되어있는 변수를 찾을 수 있습니다.

let a = null;
let b = "hi";
let c = a??b;
console.log("c :",c);
/*
    위 코드를 출력할 경우 c: hi라고 출력됩니다.
    c = a??b를 통해서 Null인 a값이 아닌 hi가 있는 b가 c로 할당되었습니다.
*/

let height = 0;
let d = height||200;
let e = height??200;
console.log("d : ",d);
console.log("es : ",e);
/*
    위의 코드를 출력하면 d : 200, e : 0이 출력됩니다.
    ||는 0을 falsy한 값으로 취급했기 때문에 Null 또는 undefined과 동일하게 할당하였습니다.
    ??는 0을 존재하는 값으로 보고 할당했습니다.
    만약 높이처럼 0이 할당될 수 있는 변수를 사용할 경우 ??가 적합합니다.
*/

