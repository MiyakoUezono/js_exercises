export function fib_while(){
    let fibonacci = [1,1]
    let i = 2
    while(i<10){
        fibonacci.push(fibonacci[i-2]+fibonacci[i-1] )
        i++;
    } 
    return fibonacci;
}
//console.log(fib_while())

export function fib_do_while(){
    let fibonacci = [1,1]
    let i = 2
    do{
        fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
        i++;
    }
    while (i<10);
    return fibonacci;
}
//console.log(fib_do_while())

export function fib_for(){
    let fibonacci = [1,1]
    for(let i = 2; i<10; i++){
        fibonacci.push(fibonacci[i-2]+fibonacci[i-1])
    } 
    return fibonacci;
}
//console.log(fib_for())

