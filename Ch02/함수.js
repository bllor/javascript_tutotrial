/*
함수: 프로그램을 구성하는 주요 구성요소로서 함수를 이용하면 중복 없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있습니다.
*/

//1. 함수 만들기
function showMessage1(){
    console.log("안녕하세요");
}
function showMessage(name){
    console.log(name,"님 안녕하세요");
}
// 함수 선언 방법은 fucntion키워드, 함수이름, 괄호로 둘러싼 매개변수를 차례로 써주면 선언할 수 있다.
// 함수 내에 선언된 변수는 지역변수, 함수 외에 선언된 변수를 외부 변수라고 하며
// 지역변수는 함수 외부에서 사용할 수 없지만, 외부변수는 함수 외부에서 사용 및 수정이 가능하다.
// 함수에 매개변수가 없을 경우 not defined가 되어서 사용할 수 없다. --> null체크를 해주어야 한다.
// 매개변수에는 함수를 넣을 수도 있다.
// return문이 없거나 return 지시자만 있는 함순느 undefined를 반환한다.
// showMessage(showMessage1);

/*
2.함수 표현식
함수를 생성하고 변수에 값을 할당하는 것처럼 함수를 변수에 할당할 수 있다.
변수를 복사해 다른 변수에 할당하는 것처럼 함수를 복하새 다른 변수에 할당할 수 있다.
*/
let sayHi = function(){
    return "hi!";
    // console.log("Hi!");
}
sayHi;
console.log(sayHi);

/*
    콜백함수
    함수를 함수의 인수로 전달하고, 필요하다면 인수로 전달한 그 함수를 나중에 호출하는 것이 콜백 함수의 개념
*/

function ask(x,yes,no){
    return x===1?yes:no;
}

let answer = ask(1,"yess","No");
console.log(answer);

/*
함수 표현식 vs 함수 선언문
주요 차이점
1.문법
함수 선언문은 주요 코드 흐름 중간에 독자적인 구문 형태로 존재
함수 표현식은 구성구분 내부에 생성

2.함수생성시기
함수선언문이 정의되기 전에도 호출 할 수 있다
--> why? 자바스크립트는 스크립트를 실행하기 전 전역에 선언된 함수 선언문을 찾고, 해당 함수를 생성하기 때문
함수표현식은 실제 실행 흐름이 해당 함수에 도달앴을 때 생성

3.스코프
엄격모드에서 함수 선언문이 코드 블럭 내에 위치하면 해당 함순느 블록 내 어디서든 접근할 수 있으나,
블록 밖에서는 함수에 접근하지 못합니다.
*/

/*
    4.화살표 함수
    함수 표현식보다 단순하고 간결한 문법으로 함술르 만들 수 있는 방법
*/
let sum = function(a,b){
    return a+b;
}

let sum2 = (a,b) => a+b;

console.log("sum : ",sum(1,2))
console.log("sum2 : ",sum2(1,2))

let sayhoo = () => {return "hoo"}; // 인수가 없을 땐 괄호를 비워놓으면 되는데, 대신 괄호를 생략해서는 안된다.
console.log(sayhoo.toString())