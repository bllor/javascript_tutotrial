let year = "2012";

if (year === 2015){
    console.log("정답");
}else{
    console.log("오답");
}
let answer = year>2013?"good":year>2023?"gugu":"no";
/*
    answer에서 처럼 ?를 추가해서 if else if와 같은 조건문을 추가할 수 있다.
*/
console.log(answer);