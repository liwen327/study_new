
/* let proxy = new Proxy({},{
  get:function(target,propKey){
    return 32;
  }
})

console.log(proxy.title);
console.log(proxy.name); */


//proxy可以作为其它对象的原型对象
/* let proxy01 = new Proxy({},{
  get:function(target,propKey){
    console.log('target: ',target);
    console.log('propKey: ',propKey);
    return 35;
  }
})

let obj = Object.create(proxy01)
console.log(obj.time); //35 */


/* var handler = {
  get:function(target,name){
    if(name === 'prototype' ){
      return Object.prototype
    }
    console.log('target get: ',target);
    return 'Hello '+ name;
  },
  apply:function(target,thisBinding,args){
    console.log('target apply: ',target);
    console.log('args apply: ',args);
    return args[0]
  },
  construct:function(target,args){
    console.log('target construct: ',target);
    return {value:args[1]}
  }
}

let fproxy = new Proxy(function(x,y){
  return x+y;
},handler)
console.log(fproxy(1,2))   //1 */


/* //高程4
const target = {
  id:'target'
}

const handler = {};
const proxy = new Proxy(target,handler);

//id属性会访问同一个值
console.log(target.id);  //target
console.log(proxy.id);   //target

//给目标属性赋值会反映在两个对象上
//因为两个对象访问的是同一个值
target.id = 'foo'
proxy.id = 'foo'
console.log(target.id);  //foo
console.log(proxy.id);   //foo

//hasOwnProperty 在两个地方    都会应用到目标对象
console.log(target.hasOwnProperty('id'));
console.log(proxy.hasOwnProperty('id'));

//Proxy.prototype是undefined
//因此不用使用instanceof 操作符
// console.log(target instanceof Proxy);
// console.log(proxy instanceof Proxy);

//严格相等可以用来区分代理和目标
console.log(target === proxy); */


const target = {
  foo:'bar'
}

const handler = {
  //捕获器在处理程序对象中以方法名为键
  get(){
    return 'handler override';
  }
}

const proxy = new Proxy(target,handler);
console.log(target.foo);  //bar
console.log(proxy.foo);   // handler override

console.log(target['foo']);
console.log(proxy['foo']);

console.log(Object.create(target)['foo']);
console.log(Object.create(proxy)['foo']);

















