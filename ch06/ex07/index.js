export function assign(target, ...sources){
    if(target !== null && target !== undefined){ 
        if(typeof target !== "object"){ //基本型の場合はボックス化（一時的にオブジェクトのように扱える）
            target = Object(target)
        }
        for(let source of sources){
            if(source !== null && source !== undefined){
                let sym = Object.getOwnPropertySymbols(source).filter(x => source.propertyIsEnumerable(x)) //Enumerableだけを抜き出すのにfilterを使用（AIに聞いた）
                let obj_keys = Object.keys(source).concat(sym)
                for(let key of obj_keys){
                    target[key] = source[key]
                }
            }
        }
    return target;
    }
    else{ 
        throw new TypeError("Cannot convert undefined or null to object")
    } 
}



/*
const sym1 = Symbol("sym1");
const sym2 = Symbol("sym2");
const o = {x:1,z:32}
Object.defineProperty(o, sym2, {
  enumerable: false,
  value: "symbol2",
});
console.log(assign({ foo: "foo", hello: "world" },[
    { foo: "fooo", bar: "bar" },
    { foo: "foooo", fizz: "fizz", buzz: "buzz" },
  ]))
console.log(assign( { parent: { child: { foo: "fooo", bar: "bar" } } },[{ parent: { child: { fizz: "fizz", buzz: "buzz" } } }]))
*/

