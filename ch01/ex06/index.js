export function fib(n){
    if (n === 1){
        return n;
    }
    else{
        let i = 0, j = 1, fib_sum = 0;
        while (n > 1){
            fib_sum = i + j;
            i = j;
            j = fib_sum;
            n--;
        }
        return fib_sum;
    }
}
