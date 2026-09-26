//writable属性
let o1 = {x:1}
Object.defineProperty(o1,"y",{value:2, writable:true} )
Object.defineProperty(o1,"z",{value:3, writable:false} )
o1.x = 4 //オブジェクトリテラルで定義したプロパティはデフォルトでwritable
o1.y = 5 //yはwritable属性と定義しているため=で上書きできる
//o1.z = 6 ←zはwritableをfalseと定義しているため、strictモードで実行するとエラーとなる
console.log(o1.x) //4
console.log(o1.y) //5
console.log(o1.z) //3

console.log(delete o1.x) //true
//console.log(delete o1.y) //エラーが出る
//console.log(delete o1.z) //エラーが出る

console.log(o1.hasOwnProperty("x")) //false
console.log(o1.hasOwnProperty("y")) //true //Object.definePropertyで定義したyは独自プロパティ
console.log(o1.hasOwnProperty("z")) //true //Object.definePropertyで定義したzは独自プロパティ

console.log(o1.propertyIsEnumerable("x")) //false
console.log(o1.propertyIsEnumerable("y")) //false Object.definePropertyで定義したプロパティはデフォルトでenumerable false
console.log(o1.propertyIsEnumerable("z")) //false Object.definePropertyで定義したプロパティはデフォルトでenumerable false

//enumerable 属性
let o2 = {}
Object.defineProperty(o2,"y",{value:2,  enumerable:true} )
Object.defineProperty(o2,"z",{value:3,  enumerable:false} )

//console.log(delete o2.y) //Object.definePropertyで定義したプロパティはデフォルトでwritable false
//console.log(delete o1.z) //Object.definePropertyで定義したプロパティはデフォルトでwritable false

console.log(o2.hasOwnProperty("y")) //true //Object.definePropertyで定義したyは独自プロパティ
console.log(o2.hasOwnProperty("z")) //true //Object.definePropertyで定義したzは独自プロパティ

console.log(o2.propertyIsEnumerable("y")) //true 
console.log(o2.propertyIsEnumerable("z")) //false

console.log("o2=",o2) //o2= { y: 2 } 

//configurable 属性
let o3 = {}
Object.defineProperty(o3,"y",{value:2,  configurable:true} )
Object.defineProperty(o3,"z",{value:3,  configurable:false} )

//o3.y = 5 //writableでないので、書き換え不可
//o3.z = 6　//writableでないので、書き換え不可

console.log(o3.y) //2
console.log(o3.z) //3

console.log(o3.hasOwnProperty("y")) //true //Object.definePropertyで定義したyは独自プロパティ
console.log(o3.hasOwnProperty("z")) //true //Object.definePropertyで定義したzは独自プロパティ

console.log(o3.propertyIsEnumerable("y")) //false 
console.log(o3.propertyIsEnumerable("z")) //false

console.log(delete o3.y) //true
//console.log(delete o3.z) //エラーが出る

/*
writable 属性:プロパティの変更が可能か？（configurable属性を持っていないと削除はできない）
enumerable 属性：列挙可能か？
configurable 属性：削除可能か？
*/