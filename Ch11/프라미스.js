/*
제작코드 : 원격에서 스크립트를 불러오는 것 같은 시간이 걸리는 일
소비코드 : 제작코드의 결과를 기다렸다가 이를 소비함
프라미스 : 제작코드와 소비코드를 연결해주는 자바스크립트 객체
         제작코드가 사용 가능할 때 소비코드가 사용할 수 있게 도와주는 객체

프라미스 만들기
let promise = new Promise(function(resolve,reject){
    //executor('제작코드')

})
new Promise에 전달되는 함수는 executor(실행자, 실행함수)라고 부릅니다.
executor는 new Promise가 만들어질 때 자동으로 실행되는데, 결과를 최종으로 만들어내는 제작 코드를 포함합니다.
executor의 인수 resolve, reject가 있지만 이는 신경쓰지 않아도 된다.
resolve는 일이 성공적으로 끝난 경우 그 결과를 value와 함께 호출하고,
reject는 에러 발생 시 여러 객체를 error와 함께 호출한다.

ex)
let promise = new Promise(function(resolve,reject){
    //프라미스가 만들어지면 executor함수는 자동으로 실행된다.
    setTimeout(()=>resolve("완료"),1000);
})
1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 '완료'가 된다.
이렇게 성공적으로 처리되었을 때의 프라미스는 'fulfilled promise(약속이 이행된 프라미스)'라고 합니다.

let promise = new Promise(function(resolve,reject){
    setTimeout(()=> reject(new Error("에러 발생")),1000);
})
1초 후 reject가 호출되면 promise의 상태가 rejected로 변경됩니다.

프라미스는 성공 또는 실패만 합니다.
resolve혹은 rejected 상태의 프라미스는 처리된 프라미스라고 부릅니다.

프라미스 객체의 state, result프로퍼티는 내부 프로퍼티이므로 개발자가 직접 접근할 수 없습니다.
.then/.catch/.finally메서드를 사용하면 접근이 가능합니다.

then, catch, finally
소비함수는 then. catch, finally 메서드를 사용하여 등롭됩니다.
[1]then
promise.then(
    function(result){결과를 다룹니다.}
    function(error){에러를 다룹니다}
)
[2]catch
에러만 다루고 싶으면 .then(null, error)를 사용해도 되지만
catch(error)로 쓰는 것과 동일하다.

[3]finally
프로미스가 끝난 후 사용이 된다.
finally는 프라미스가 이행되었는지, 거부되었는지 알 수 없다.

ex)
let promise = new Promise(function(resolve,reject){
    setTimeout(() => resolve("완료"),1000)
})
promise.then(
    result => alert(result) --> promise가 성공(resolve)했을 경우
    error => alert(error) --> promise가 실패(reject)했을 경우

)
첫번 째 resolve/reject 호출만 고려 대상이므로   두번째 resolve는 무시된다.

promise를 이용한 지연
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
delay(3000).then(()=>alert('3초 후 실행'))
*/