// indexOf오ㅏ splice()를 사용하려 다음 배열에서 '라'를 제거하시오.

const arr = ["가", "라", "다", "라", "마", "라"];

for (let i = 0; i < arr.length; i++) {
  if (arr.indexOf("라") === i) {
    arr.splice(i, 1);
  }
}
console.log(arr);

// 1)[1,2,3,4,5].slice(1);
// 2)[1,2,3,4,5].slice(1,3);
// 3)[1,2,3,4,5].slice(1,-1);
// 4)[1,2,3,4,5].slice();
// 5)[1,2].concat([3,4])
// 6)[1,2].concat(3,4)

// 1) [2,3,4,5]
// 2) [2,3]
// 3) [2,3,4]
// 4) [1,2,3,4,5]
// 5) [1,2,3,4]
// 6) [1,2,3,4]

// 1)["1", "2", "3"].join();
// 2)["1", "2", "3"].join("")
// 3)["1", "2", "3"].join("x")
// 4)'2345'.split()
// 5)'2345'.split('x')
// 6)'2345'.split('')
// 7)'2,3,4,5'.split('')
// 8)'2,3,4,5'.split(',')


// 1)'123'
// 2)'123'
// 3)'1x2x3'
// 4)['2345']
// 5)['2345']
// 6)['2','3','4','5']
// 7)['2',',','3',',','4',',','5']
// 8)['2','3','4','5']