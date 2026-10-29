export function shakersort(arr,compare){
    let start = 0
    let end = arr.length-1
    let last_swap

    while(true){
        last_swap = start
        for(let i = start; i < end; i++){
            if(compare(arr[i],arr[i+1]) > 0){
                const temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                last_swap = i
            }
        }
        end = last_swap

        if(start === end){
        break;
        }

        last_swap = end
        for(let i = end; i > start; i--){
            if(compare(arr[i-1],arr[i]) > 0){
                const temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
                last_swap = i
            }
        }
        start = last_swap

        if(start === end){
        break;
        }
    }
    return arr;
}

//(sort([4,13,54,36,34,4], (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0)))