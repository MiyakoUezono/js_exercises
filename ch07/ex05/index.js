export function push(a,b){
    return [...a, b]
}

export function pop(a){
    if(a.length === 0){
        return undefined
    }
    return a.filter((value,index) => index !== a.length-1)
}

export function shift(a){
    return a.filter((value,index) => index !== 0)
}

export function unshift(a,...b){
    return [...b,...a]
}

export function sort(a,func){
    let result = [...a] //aとすると、resultはaを参照するためaが変わってしまう
    let temp
    if(func === undefined){ //ソート関数が引数として指定されていない場合はアルファベット順にソート
        func = function(x,y){
            if(x<y) return -1;
            if(x>y) return 1;
            return 0;
        }
    }
    for(let n=0; n<a.length-1; n++){
        for(let i=0; i<a.length-1; i++){
            if(func(result[i],result[i+1]) > 0){
                temp = result[i]
                result[i] = result[i+1]
                result[i+1] = temp
            }
        }
    }
    return result
}
