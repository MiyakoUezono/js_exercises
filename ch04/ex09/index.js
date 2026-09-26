function add(){
    return 1+2;
}

console.log(typeof undefined) //予想undefined=> undefined
console.log(typeof null) //予想object=> object
console.log(typeof {x:1,y:2}) //予想object=> object
console.log(typeof NaN) //予想number=> number
console.log(typeof 10.654) //予想number=> number
console.log(typeof add()) //予想function => number add()=3だから
console.log(typeof function add(){return 1+2;})//予想function => function