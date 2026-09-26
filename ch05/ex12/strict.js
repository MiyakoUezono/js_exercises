a = 1
b = 2
let o = {a:3, b:4}
// 上記実行結果：ReferenceError: a is not defined

with(o){
    a = b;
}
console.log("a=",a)
console.log("b=",b)
console.log("o=",o)

//上記実行結果：SyntaxError: Strict mode code may not include a with statement

function func(){
    console.log(this);
    }

func();
//上記実行結果：undefined

