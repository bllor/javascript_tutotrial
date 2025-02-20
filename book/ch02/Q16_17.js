// const a = { name: "강아지" };
// const b = a;
// const c = b;
// a.name = "고양이";

// console.log(b.name, "||", c.name);

const a = "b";
const c = ["d", true, 1];
const e = { g: "h" };
const i = [{ j: "k" }, { l: "m" }];
const n = { o: { p: "q" } };

const a1 = a;
const c1 = JSON.parse(JSON.stringify(c));
const e1 = JSON.parse(JSON.stringify(e));
const i1 = JSON.parse(JSON.stringify(i));
const n1 = JSON.parse(JSON.stringify(n));


