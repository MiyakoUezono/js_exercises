//const o = { x: 1, y: 2, z: 3 };
export function create_obj(o){
    let new_obj = {}
    for(let k of Object.keys(o)){
        if(o[k] !== null && o[k] % 2 === 0){
            new_obj[k] = o[k]; //new_obj.kとするとkという名前のプロパティとして解釈されてしまう
        }
    }
    return new_obj;
}

//console.log(f(o)); // { y: 2 }
//console.log(o); // { x: 1, y: 2, z: 3 } 元のオブジェクトは変更しない