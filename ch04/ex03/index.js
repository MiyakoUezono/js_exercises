export function sum(a,b){
    let i,j
    a = a | 0; //AIに聞いて追加
    b = b | 0; //整数化しておかないと、aが小数、bが0の際、aがそのまま（小数のまま）返ってしまう
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

/* 
下記、AIに聞いた別解
関数sumは、分割代入により変数i,jは不要
export function sum(a, b) {
    a |= 0;
    b |= 0;
    while (b !== 0) {
        [a, b] = [a ^ b, (a & b) << 1]; //左辺は代入する前に評価されるため、どちらかが先に書き換わることがない
    }
    return a;
}
*/