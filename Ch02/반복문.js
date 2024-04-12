/*
1.
while(condition){
    //코드
}
while은 condition이 true일 때까지 코드를 반복한다.

2.do~while
do{
  //코드
}while(condition)
반복문의 코드가 먼저 실행이 되고, 조건을 확인한 후 condition이 true가 될 때까지 실행된다.
*/
let i = 0;
while(i<3){
    console.log(i);
    i++;
}

/*
3.for문
[1]반복문 빠져나오기
for(i = 0 ; i<3;i++){
    console.log(i)
}
위의 코드는 i가 3이 되면 종료가 되는 코드인데
i=2일 때 그만하고 싶으면
for(i = 0 ; i<3;i++){
    console.log(i)
    if(i==2){
        break;
    }
}
break를 넣게 되면 해당 반복문을 빠져나올 수 있다.
[2]다음 반복문으로 넘어가기
continue지시자는 전체반복문을 멈추지 않고 현재 실행중인 반복을 멈추고 다음 반복을 강제로 실행시킵니다.
for(i = 0 ; i<3;i++){
    if(i==1){
        continue;
    }
    console.log(i)
}
위의 코드를 실행할 경우 조건문에 해당되는 1이 출력되지 않고 0,2만 출력됩니다.
?의 오른쪽에는 break나 continue가 올 수 없습니다.
[3]여러 개의 중첩 반복문을 한 번에 빠져 나오기

for(let i = 0; i<3;i++){
    for(let j = 0; j<3; j++){
        let num = i+j;

    }
}
console.log("완료")
다음과 같은 코드가 있을 때 num의 값이 5가 되었을 때 바로 완료를 출력하려면 어떻게 해야할까?
out_for:for(let i = 0; i<3;i++){
    for(let j = 0; j<3; j++){
        let num = i+j;
        if(num==5){
            break out_for; 
        }
    }
}
console.log("완료")
다음과 같이 for문 앞에 out_for처럼 label이름을 지정해주면,
break lable이름 이 실행 될 때 해당 조건문을 빠져나올 수 있다.

*/
for(i = 0 ; i<3;i++){
    if(i==1){
        continue;
    }
    console.log(i)
}
console.log("-----------------")
for(i = 0 ; i<3;i++){
    if(i==1){
        continue;
    }
    console.log(i)
}

console.log("@@@@@@@@@@@@@@@@@")
out_for:for(let i = 0; i<3;i++){
    for(let j = 0; j<3; j++){
        let num = i+j;
        if(num==5){
            break out_for; 
        }else{
            console.log(i,j)
        }
    }
}
console.log("완료")