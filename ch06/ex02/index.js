let obj = {x:1,y:2}
let obj_create = Object.create(obj)

console.log("obj=",obj) //obj= { x: 1, y: 2 }
console.log("obj_create=",obj_create) //obj_create= {}
console.log(Object.getPrototypeOf(obj_create) === obj) //true
