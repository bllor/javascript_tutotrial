/*
복수의 if 조건문은 switch문으로 바꿀 수 있으며, 코드 자체가 비교 상황을 잘 설명한다는 장점이 있다.

*/
let x = 2;
switch(x){
    case 0: // if(x===0)과 같다.
            console.log("0입니다.")
    case 2:
            console.log("2입니다.")
    default:
        console.log("아무것도 아닙니다.")
}
/*
    위의 switch문을 실행하면 2입니다, 아무것도 아닙니다가 출력이 되는데
    case문 안에 break문이 없으면 조건에 부합하는지 여부를 따지지 않고 이어지는 case문을 실행하기 때문이다.
*/