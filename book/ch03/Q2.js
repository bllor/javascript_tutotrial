const intervalId = setInterval(() => {
  console.log("2초마다 실행");
}, 2000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);
