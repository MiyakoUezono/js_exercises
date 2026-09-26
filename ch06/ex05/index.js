let o_prot = {1:10, 2:11, a:12, b:13}
Object.defineProperty(o_prot,"x",{value:14, enumerable:true} )

let obj = Object.create(o_prot)
Object.defineProperty(obj,1,{value:110,enumerable:true} )
Object.defineProperty(obj,3,{value:15,enumerable:true} )
Object.defineProperty(obj,"a",{value:16,enumerable:true} )
Object.defineProperty(obj,"c",{value:17,enumerable:true} )
Object.defineProperty(obj,"x",{value:18, enumerable:false} )

//console.log(o_prot) //{ '1': 10, '2': 11, a: 12, b: 13, x: 14 }

for(let p in obj){
    console.log(p)
}

/*
実行結果
1
3
a
c
2
b

・初めに、独自プロパティ（1,3,a,c）が列挙される
　配列のインデックスに見える、プロパティ名が数値のプロパティ→プロパティ名が文字列のプロパティ　の順
※xは列挙不可の独自プロパティに上書きされるため、列挙されない
・次に、プロトタイプオブジェクトに対して、同じ順番で列挙される
※1,aは独自プロパティに上書きされ、先に列挙される
*/
