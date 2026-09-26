export function prop(o){
    let prop_array = []
    for(let p of Reflect.ownKeys(o)){
            prop_array.push(p)
    }
    for(let p in o){
        if(!Object.hasOwn(o,p)){ //!o.hasOwnProperty(p)とするとObject.create(null)で動かない（本来Object.prototypeが持っているメソッドのため）
            prop_array.push(p);
        }
}
    return prop_array;
}

/*
let o1 = {x:10,2:11}
Object.defineProperty(o1,"y",{value:110,enumerable:false} )
Object.defineProperty(o1,1,{value:110,enumerable:true} )
Object.defineProperty(o1,Symbol("sym1"),{value:110,enumerable:true} )

let o2 = Object.create(o1)
Object.defineProperty(o2,"x",{value:110,enumerable:false} )
Object.defineProperty(o2,"y",{value:110,enumerable:false} )
Object.defineProperty(o2,"z",{value:110,enumerable:true} )
Object.defineProperty(o2,3,{value:110,enumerable:true} )
Object.defineProperty(o2,4,{value:110,enumerable:false} )
Object.defineProperty(o2,Symbol("sym2"),{value:110,enumerable:true} )
Object.defineProperty(o2,Symbol("sym3"),{value:110,enumerable:false} )

console.log(prop(o2))
*/