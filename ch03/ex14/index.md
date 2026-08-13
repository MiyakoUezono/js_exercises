##letで変数を宣言した場合
for (let i = 0; i < 10; i++) {
  (function () {
    let i = 100;
  })();
  console.log(i);
}
console.log(i);

##実行結果
0
1
2
3
4
5
6
7
8
9
file:///C:/Users/r00528099/study-js-exercises-public-main/exercises/ch03/ex14/index_let.js:7
console.log(i);
            ^

ReferenceError: i is not defined
    at file:///C:/Users/r00528099/study-js-exercises-public-main/exercises/ch03/ex14/index_let.js:7:13
    at ModuleJob.run (node:internal/modules/esm/module_job:439:25)
    at async node:internal/modules/esm/loader:643:26
    at async asyncRunEntryPointWithESMLoader (node:internal/modules/run_main:101:5)

初め（2行目）にletで宣言されたiは、forループ内で有効となるため、forループ内で出力されるiは、0~9。
再宣言している let i=100は関数内でのみ有効のため、関数外でiを出力する際には無効となる。
また、8行目で出力しようとしているiは、forループ外であり、定義されていないためエラーがでる。

##varで変数を宣言した場合
for (var i = 0; i < 10; i++) {
  (function () {
    var i = 100;
  })();
  console.log(i);
}
console.log(i);

##実行結果
0
1
2
3
4
5
6
7
8
9
10

初めにvarで宣言されたiは、関数functionの外側で宣言されているため、グローバル変数となる。
そのため、forループ外でもi=10が出力できる。
なお、関数内で宣言されているi=100は、関数内で有効のため、forループ内で出力するiは0~9。


##すべてのletを消した場合
for (i = 0; i < 10; i++) {
  (function () {
    i = 100;
  })();
  console.log(i);
}
console.log(i);

##実行結果

