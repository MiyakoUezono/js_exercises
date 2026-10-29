export function sum(a){
    if(a === undefined){
        return 0
    }else{
    return a.reduce((x,y) => x+y, 0)
    }
}

console.log(sum([]))

export function join(a,b){
    if(b === undefined){
        b = ","
    }
    console.log("b=",b)
    return a.reduce(
         (x,elem,index,arr) => (index !== arr.length-1) ? ((elem !== null) ? (x + elem + String(b)) : x + String(b)) : x + elem ,"")
}
console.log(join(["", "", ""], "-"))

export function reverse(a){
    return a.reduce((x,y) => [y, ...x],[])
}
console.log(reverse([1,2,3,4,5]))


export function every(a,func){
    let result = a.reduce((x, elem, index, arr) => x + func(elem, index, arr), 0)
    let length = a.reduce((x,y) => x+1,0)
    if(result === length){
        return true
    }else 
        return false
}

console.log(every([1, , 1], (x) => x === 1)) //reduceは空の場合は、飛ばされる


export function some(a,func){
    let result = a.reduce((x, elem, index, arr) => x + func( elem, index, arr) , 0)
    if(result === 0){
        return false
    }else 
        return true
}
const is = (currentValue) => currentValue < 40;
