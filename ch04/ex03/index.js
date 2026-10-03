export function sum(a,b){
    let i,j
    a = a | 0;
    b = b | 0;
    while(b | 0){
        i = a ^ b;
        j = a & b;
        j = j << 1;
        a = i;
        b = j;
    }
    return a
}


export function sub(a,b){
    b = ~ b;
    b = sum(1,b)
    console.log("b=",b)
    return sum(a,b)
}

