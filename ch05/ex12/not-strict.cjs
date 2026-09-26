a = 1
b = 2
let o = {a:3, b:4}

with(o){
    a = b;
}

console.log("a=",a)
console.log("b=",b)
console.log("o=",o)

function func(){
    console.log(this);
    }

func();

/*
実行結果：
a= 1
b= 2
o= { a: 4, b: 4 }
<ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    Symbol(nodejs.util.promisify.custom): [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter],
  navigator: [Getter],
  a: 1,
  b: 2
}
*/