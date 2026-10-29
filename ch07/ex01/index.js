export function add(a,b){
    if(a.length === b.length){
        let result = new Array(a.length)
        for(let i = 0; i < a.length; i++){
            if(a[i].length === b[i].length){
                result[i] = new Array(a[i].length)
                for(let j = 0; j < a[i].length; j++){
                    result[i][j] = a[i][j] + b[i][j] 
                }
            }
            else return 
        } 
    return result
    }
}

export function mul(a,b){
    let result = new Array(a.length)
    for(let l = 0; l < a.length; l++){
        if(a[l].length === b.length){
            result[l] = new Array(b[0].length)
            for(let n = 0; n < b[0].length; n++){
                result[l][n] = 0
                for(let m = 0; m < a[l].length; m++){
                    result[l][n] += a[l][m] * b[m][n]
                }
            }
            
        }
        else return
    }
    return result
}

/*
mul別解（AIによる回答）
export function mul(a, b) {
  if (a.length === 0 || b.length === 0) return undefined;
  if (a[0].length !== b.length) return undefined; #初めに長さをチェックすることで不要なループを回さないようにする

  const m = a.length;
  const n = b.length;
  const p = b[0].length;

  const result = new Array(m);
  for (let i = 0; i < m; i++) {
    result[i] = new Array(p).fill(0);
    for (let j = 0; j < p; j++) {
      for (let k = 0; k < n; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

*/
