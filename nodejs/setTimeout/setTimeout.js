/*
 * @Author: liwz liwz@yonyou.com
 * @Date: 2023-11-23 09:00:10
 * @LastEditors: liwz
 * @LastEditTime: 2023-12-01 14:56:42
 * @FilePath: /study/Users/liwenzhi/study/node/setTimeout/setTimeout.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
process.nextTick(function () {
  console.log('nextTick延迟执行1')
})
process.nextTick(function () {
  console.log('nextTick延迟执行2')
})
setTimeout(() => {
  console.log('setTimeout执行1')
}, 0)
setTimeout(() => {
  console.log('setTimeout执行2')
}, 0)
// 加入两个setImmediate()的回调函数
setImmediate(function () {
  console.log('setImmediate延迟执行1')
  // 进入下次循环
  process.nextTick(() => {
    console.log('强势插入')
  })
})
setImmediate(() => {
  console.log('setImmediate延迟执行2')
})
console.log('正常执行')
// setTimeout(() => {
//   console.log('setTimeout执行1')
// }, 0)
// setTimeout(() => {
//   console.log('setTimeout执行2')
// }, 0)
// setInterval(()=>{
//   console.log('setInterval执行1')
// },1000)

/* 当第一个setImmediate执行完成后，并没有立即执行第二个setImmediate，而是进入了下一轮循环，
再次按process.nextTick()优先、setImmediate次后的顺序执行。
之所以这样设计，是为了保证每轮循环能够较快的执行结束，防止CPU占用过多而阻塞后续I/O调用的情况 */
