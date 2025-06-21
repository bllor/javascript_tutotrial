// const pro1 = new Promise((resolve, reject) => {
//   resolve("성공인가");
//   reject("실패인가?");
// });
// pro1.catch((data) => console.log(data));

const wait = (ms) => new Promise((resolve) => {
  setTimeout(() => {
    console.log("1");
    resolve();
  }, ms);
});

const main = async () => {
  await setTimeout(() => {
    console.log("1");
  }, 0);
  console.log("a");
  console.log("b");
  console.log("c");
};

main();
