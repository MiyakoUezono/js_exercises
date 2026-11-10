export function shakersort(arr,compare){
    let start = 0
    let end = arr.length-1
    let last_swap

    while(true){
        //先頭から末尾へ、隣接する要素を比較して最大値を末尾に動かす
        last_swap = start
        for(let i = start; i < end; i++){
            if(compare(arr[i],arr[i+1]) > 0){
                const temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                last_swap = i
            }
        }
        end = last_swap//並べ替えが終わった場所はソートの対象から外すため、endを狭める

        if(start === end){
        break;
        }
        //末尾から先頭へ、最小値を先頭に動かす
        last_swap = end
        for(let i = end; i > start; i--){
            if(compare(arr[i-1],arr[i]) > 0){
                const temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
                last_swap = i
            }
        }
        start = last_swap//並べ替えが終わった場所はソートの対象から外すため、startを狭める

        if(start === end){
        break;
        }
    }
    return arr;
}

//(sort([4,13,54,36,34,4], (lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0)))