function fizzbuzz_revise(n) {
  let result = new Array(n).fill(0) //要素が全て０の配列を用意しておく
  result.map(function(v,i,a) {a[i] = (i+1) % 15 ? ((i+1) % 3 ? ((i+1) % 5 ? (i+1) : "Buzz") : "Fizz") : "FizzBuzz"; return result})//Fizz,Buzz,FizzBuzz,iに置き換える
  console.log(result.join("\n")) //文字列に直して出力
}

fizzbuzz_revise(20)


//2つの配列の要素の平方和を返す
function sumOfSquaredDifference_revise(f, g) {
  let j = f.length
  let h = f.concat(g) //2つの配列を繋げる
  let result = h.map((v,i,a)=>( (a[i] - a[i+j]) ** 2),0) //(f[i]-g[i])**2を計算、後半はi+jの値は存在しないためNaNとなる
  result = result.filter(x => !Number.isNaN(x)) //NaNを除く
  return(result.reduce((x,y) => x+y, 0)) //配列の要素を足し算
}

const f = [1,2,3]
const g = [3,5,7]
//h = [ 1, 2, 3, 3, 5, 7 ]
//result = [ 4, 9, 16, NaN, NaN, NaN ] →　[ 4, 9, 16 ]
console.log(sumOfSquaredDifference_revise(f,g)) //29 

//偶数の要素だけ足し合わせ、42以下か否かを返す
function sumOfEvensIsLargerThan42_revise(array) {
  let result = array.filter(x => x%2 === 0) //偶数の要素だけフィルター
  let sum = result.reduce((x,y) => x+y, 0) //配列の要素を足し算
  return sum >= 42;
}

console.log(sumOfEvensIsLargerThan42_revise([12,11,10,30,0]) )
