// const { rejects } = require("assert");
// const { resolve } = require("path");

const { rejects } = require("assert");

// const setTimeoutPromise = new Promise((resolve, reject) => {
//   setTimeout(resolve, 0);
// });
// const main = async () => {
//   await setTimeoutPromise();
//   const i = "a";
//   console.log(i);
//   const t = "b";
//   console.log(i);
//   console.log(t);
//   console.log(t);
// };
// main()

//////////////////////
//다음 프로미스 코드를 async/await로 변경하시오.
const setTimeoutPromise = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });
setTimeoutPromise(0)
  .then(() => {
    return "a";
  })
  .then((data1) => {
    console.log(data1);
    return "b";
  })
  .then((data2) => {
    console.log(data2);
  });

const main = async () => {
  await setTimeoutPromise(0);
  const data1 = await "a";
  console.log(data1);
  const data2 = await "b";
  console.log(data2);

  //   await setTimeoutPromise(0);
};

main();
