/*
function 앞에 async를 붙이면 해당 함수는 항상 프라미스를 반환합니다.

async function f(){
    return 1;
}
f().then(alert); --> 1
명시적으로 프라미스를 반환하는 것도 가능한데, 결과는 동일합니다.
async function f(){
    return Promise.resolve(1);
}
f().then(alert) --> 1

await는 async함수 안에서만 동작합니다.

async function f(){
    let promise = new Promise(function(resolve,reject)=>{
        setTimeout(() => resolve("완료"),1000)
    });
    let result = await promise;
    alert(result)
}
f();
함수를 호출하고, 함수 본문이 실행되는 도중에 실행히 잠시 중단되었다가 프라미스가 처리되면 실행이 재개됩ㄴ디ㅏ.
await는 promise.then보다 좀 더 세련되게 result값을 얻을 수 있도록 해주는 문법입니다.

await는 최상위 레벨 코드에서는 사용할 수 없지만, 익명 async함수로 코드를 감싸면 사용할 수 있다.

await는 thenable(then 메서드가 있는 호출 가능한 객체)를 사용할 수 있습니다.
thenable객체는 서드파티 객체가 프라미스가 아니지만 프라미스와 호환 가능한 객체를 제공할 수 있다는 점에서 생긴 기능입니다.
서드파티에서 받은 객체가 .then을 지원하면 이 객체를 await와 함께 사용할 수 있습니다.

async 클래스 메서드
메서드 이름 앞에 async를 추가하면 async 클래스 메서드를 선언할 수 있습니다.

에러 핸들링
프라미스가 정상적으로 이행되면 await promise는 프라미스 객체의 result에 저장된 값을 반환한다.
반면 프라미스가 거부되면 마치 throw문을 작성한 것처럼 에러가 던져집니다.

async function f(){
    await Promise.reject(new Error("에러발생"))
}
async function f(){
    throw new Error("에러 발생");
}
서로 같이 동작하는 코드 입니다.

실제 상황에선 프라미스가 거부 되기 전에 약간의 시간이 지체되는 경우가 있습니다.
이런 경우엔 await가 에러를 던지기 전에 시간이 지체되는데, await가 던진 에러를 try...catch를 통해 잡을 수 있습니다.

async function f(){
    try{
        code1
    }catch(err){
        alert(err)
    }
}
try...catch가 없으면 async함수 f는 프라미스 거부 상태가 되는데,
f.catch()를 통해 거부된 프라미스를 처리할 수 있습니다.

async/await는 Promise.all과도 함께 쓸 수 있습니다.
여러 개의 프라미스가 모두 처리되길 기다려야 하는 상황이라면 이 프라미스들을 Promise.all로 감ㄱ싸고
여기에 await를 붙여 사용할 수 있습니다.

일반함수에서 async함수를 호출하고 그 결과 사용하는 방법
async function wait(){
    await new Promise(resolve => setTimeout(resolve,1000));
    return 10;
}

function f(){
    async(
        wait()
    )
}
가 아닌

function f(){
    wait().then(result => alert(result));
}
async함수를 호출하면 프라미스가 반환되므로, .then을 붙여서 호출한다.
f()
*/