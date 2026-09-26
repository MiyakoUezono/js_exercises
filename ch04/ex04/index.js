
export function bitCount(x){
    let count = 0
    while(x !== 0){
        if(x & 1){
            count += 1
        }
        x = (x >>> 1)
    }
    return count
}   