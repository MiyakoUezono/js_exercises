function f(o){
    let new_obj = {}
    for(let k of Object.keys(o)){
        if(o[k] % 2 === 0 && o[k] !== null){
            debugger;
            new_obj[k] = o[k]; //new_obj.kとするとkという名前のプロパティとして解釈されてしまう
        }
    }
    return new_obj;
}

console.log(f({x:1, y:2}))