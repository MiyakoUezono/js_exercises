let o = {}
o.x = 1
let p = Object.create(o)
p.y = 2
let q = Object.create(p)
q.z = 3
let f = q.toString()
q.x + q.y

console.log(o.isPrototypeOf(p)) //true 
console.log(o.isPrototypeOf(q)) //true
console.log(p.isPrototypeOf(q)) //true
//isPrototypeOf()はオブジェクトインスタンスのメソッド

let a = []
let d = new Date()
let m = new Map()

console.log(Object.prototype.isPrototypeOf(a)) //true 
console.log(Object.prototype.isPrototypeOf(d)) //true
console.log(Object.prototype.isPrototypeOf(m)) //true すべてObject.prototypeを継承している
console.log(Array.prototype.isPrototypeOf(o)) //false 
console.log(Array.prototype.isPrototypeOf(d)) //false
console.log(Array.prototype.isPrototypeOf(m)) //false
console.log(Date.prototype.isPrototypeOf(o)) //false 
console.log(Date.prototype.isPrototypeOf(a)) //false
console.log(Date.prototype.isPrototypeOf(m)) //false
console.log(Map.prototype.isPrototypeOf(o)) //false
console.log(Map.prototype.isPrototypeOf(a)) //false
console.log(Map.prototype.isPrototypeOf(d)) //false
