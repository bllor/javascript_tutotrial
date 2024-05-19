/*
콜백함수 : 나중에 호출할 함수
사용할 함수가 전부 호출된 다음에 다른 액션을 취하고 싶을 때 사용하는 함수

ex)스크립트를 불러온 다음 다른 일을 하고 싶을 때,
function loadScript(src,callback){
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}
로 정의하고,
loadScript('path',script => {
    alert( _ );    
})
와 같이 사용한다면 스크립트를 호출한 다음에 함수가 종료된다.
스크립트가 여러 개 존재하는 경우 콜백 함수를 중첩해서 사용하는데,
loadScript('path1',src=>{
    alert('첫 번째 스크립트를 부르는데 성공했습니다.')
    loadScript('path2',src=>{
        alert('2번 째 스크립트를 부르는데 성공했습니다.')
    })
})
*/