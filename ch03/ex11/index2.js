export function equalArrays(a,b){
    if (a.length !== b.length){
        return false
    }
    for (let i=0; i<a.length; i++){
        if (a[i] !== b[i]){
            return false
        }
    }
    return true
}

export function equals(o1,o2) {
    if (o1 === o2) {
        return true;
    }else if (o1 === null ||typeof o1 !== "object" ||o2 === null || typeof o2 !== "object"){
        return false
    }else if (equalArrays(Object.keys(o1),Object.keys(o2)) === false){
        return false
    }else {
        for (let key of Object.keys(o1)){
            if (equals(o1[key],o2[key]) === false){
                return false
            };
        }
        return true
    }
}

//console.log("equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})=",equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}}))
// console.log("equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})=",equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}}))
