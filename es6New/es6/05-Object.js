// Object.assign()

//Object.keys(),Object.values(),Object.entries()

/* let person = {
  name:'Matt',
  age:27
};

let personName,personBar,personAge;
try{
  ({name:personName, foo:{bar:personBar}, age:personAge} = person);
}catch(e){console.log(e)} */

/* let person = {
  name:'Matt',
  age:27
}
function printPerson(foo,{name,age},bar){
  console.log(arguments)
  console.log(name,age)
}
printPerson('1st',person,'2nt') */

/* let biped = {
  num:2
}
let person = Object.create(biped)
person.name = 'Matt';


console.log(person.name)
console.log(person.num)
console.log(Object.getPrototypeOf(person) === biped) */

//类块中原型方法是定义在类的原型上的方法 ，构造函数中的是定义在实例上的
/* class Person{
  constructor(){
    this.locate = ()=> console.log('instance')
  }
  locate(){
    console.log('prototype')
  }
}

let p = new Person();

p.locate();  //instance

Person.prototype.locate(); //prototype */

//静态类方法非常适合作为实例工厂
/* class Person{
  constructor(age){
    this.age_ = age;
  }
  sayAge(){
    console.log(this.age_);
  }
  static create(){
    //使用随机年龄创建并返回 一个Person实例
    return new Person(Math.floor(Math.random()*100));
  }
}

console.log((Person.create()));  //Person {age_: 88} */

//类定义语法支持在原型和类本身上定义生成器方法
/* class Person{
  //在原型上定义生成器方法
  *createNicknameIterator(){
    yield 'Jack';
    yield 'Jake';
    yield 'J-Dog';
  }
  //在类上定义生成器方法
  static *createJobIterator(){
    yield 'Butcher';
    yield 'Baker';
    yield 'Maker'
  }
}

let jobIter = Person.createJobIterator();
console.log(jobIter.next().value);  //Butcher
console.log(jobIter.next().value);   //Baker
console.log(jobIter.next().value);  //Maker

let p = new Person();
let nicknameIterator = p.createNicknameIterator();
console.log(nicknameIterator.next().value);   //Jack
console.log(nicknameIterator.next().value);   //Jake
console.log(nicknameIterator.next().value);   //J-Dog */

//因为类支持生成器方法，所以可以通过添加 一个默认的迭代器，把类实例变成可迭代对象
/* class person{
  constructor(){
    this.nickNames = ['Jack','Jake','J-Dog'];
  }

  *[Symbol]
} */


/* const keyA = {a:1}
const keyB = {b:2}

let obj = {
  [keyA]:'objAValue',
  [keyB]:'objBValue'
}
console.log('obj: ',obj)  //{[object Object]: 'objBValue'} */

/* // Object.is()
console.log('object.is: ',Object.is('foo','foo'))
console.log('object.is1: ',Object.is(NaN,NaN))
console.log('object.is1: ',Object.is(+0,-0))

// es5可以通过下面方法部署Object.is()
Object.defineProperty(Object,'is',{
  value:function(x,y){
    if(x===y){
      // 针对＋ 0 不等于－ 0 的情况
      return x !=0 || 1/x ===1/y
    }
    // 针对NaN 的情况
    return x!==x || y!==y

  },
  configurable:true,
  writable:true,
  enumerable:false
})
console.log('object.is: ',Object.is('foo','foo'))
console.log('object.is1: ',Object.is(NaN,NaN))
console.log('object.is1: ',Object.is(+0,-0)) */

// Object.assign()

let a = {a:1}
let b = {b:2}
let c = {c:3}
// let obj = Object.assign(a,...b)   //报错 05-Object.js:143 Uncaught TypeError: Spread syntax requires ...iterable[Symbol.iterator] to be a function
console.log(Object.assign(a,b,c),obj)   //{a: 1, b: 2, c: 3}









