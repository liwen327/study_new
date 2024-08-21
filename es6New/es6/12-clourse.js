// var bar = function(){
//   console.log('bar2');
// }

// function  bar(){
//   console.log('bar1');
// }

// var bar = function(){
//   console.log('bar2');
// }

// bar()


/* foo(10)
function foo(num){
  console.log(foo);  //undefined
  foo = num;
  console.log(foo);  //10
  var foo;
}

console.log(foo);   //f function(num){console.log(foo);foo = num;console.log(foo);var foo;}
foo =1;
console.log(foo);  //1 */


/* //调用栈
function f1(){
  f2()
}
function f2(){
  f3()
}
function f3(){
  f4()
}
function f4(){
  console.log('f4');
}
f1()  //f4

//调用栈：先进后出（后进先出）。f1 -> f2 -> f3-> f4  。个具体过程：f1先入栈，紧接着f1调用f2，f2再入栈。以此类推，直到f4执行完，然后f4先出栈，f3再出栈，接着f2出栈，最后f1出栈。这个过程是满足先进后出的规则，因此形成调用栈。
 */

//闭包定义：函数嵌套函数时，内层函数引用了外层函数作用域下的变量，并且内层函数在全局环境下可访问。

/* function numGenerator(){
  let num = 1
  num++
  return ()=>{
    console.log(num);
  }
}
var getNum = numGenerator()
getNum()   //2 */


/* //没有及时把变量清空导致的内存泄漏
var element = document.getElementById('element');
element.style.color = 'red'
function remove(){
  element.parentNode.removeChild(element)
}

//这会导致内存泄漏，最好在remove()方法中增加element = null */



/* function foo(){
  let value = 123
  function bar(){
    alert(value)
  }
  return bar
}
let bar = foo()() */
//上面代码中，变量value将会被保存在内存中，如果加上bar = null，则随着Bar不再被引用，value也会被清除。

/* function foo(){
  let value = Math.random()
  function bar(){
    console.log(value);
    debugger
    // alert(value)
  }
  return bar
}
let bar = foo()() */

//下面实例来熟悉借助chrome devtool排查内存泄漏的具体应用。
/* var array = []
function createNodes(){
  let div
  let i = 100;
  let frag = document.createDocumentFragment()
  for(;i>0;i--){
    div = document.createElement('div');
    div.appendChild(document.createTextNode(i))
    frag.appendChild(div)
  }
  document.body.appendChild(frag)
}

function badCode(){
  array.push([...Array(100000).keys()])
  createNodes()
  setTimeout(badCode,1000)
}
badCode() */


//下面进入闭包的实战环节   下面代码会输出什么？
/* const foo = (function(){
  var v=0;
  return ()=>{
    return v++
  }
}())

for(let i=0; i<10; i++){
  foo()
}
console.log(foo()); */

/* const foo = (function(){
  var v=0;
  return ()=>{
    return v++
  }
}())
console.log(foo) */

//实战例题2 ，下面代码输出什么？
/* const foo = ()=>{
  var arr = []
  var i
  for(i=0; i<10; i++){
    arr[i] = function(){
      console.log(i);
    }
  }
  return arr[0]
}
foo()()
//答案依然是：10.  自由变量为i，烦人例题1，执行foo返回的是arr[0],arr[0]此时是函数，其中变量i的值为10. */


//实战例题3 ，下面代码输出什么？

/* var fn = null
const foo = ()=>{
  var a = 2
  function innerFoo(){
    console.log(a)
  }
  fn = innerFoo
}
const bar = ()=>{
  fn()
}
foo()
bar()  // 2 */
// bar()运行后输出2. 正常来说，根据调用栈的知识，foo函数执行完毕后，其执行环境生命周期会结束，所占用的内存会被垃圾收集器释放，上下文消失。但是通过将innerFoo函数赋值给全局变量fn，foo的变量对象a也会被保留下来，所以，函数fn在函数bar内部执行时，依然可以访问这个被保留下来的变量对象，输出结果为2.

//实战例题4, 我们将3题的代码稍作修改，得到以下代码。
var fn = null
const foo = ()=>{
  var a = 2
  function innerFoo(){
    console.log(c)
    console.log(a)
  }
  fn = innerFoo
}
const bar = ()=>{
  var c = 100
  fn()
}
foo()
bar()

















