Node で debugger 文を使ってデバッグする方法
1. コードにdebugger文を挿入
2. node inspect index.js　と実行
3. debug> c と入力することでdebugger;まで処理を進める 
　 以降、変数の中身を確認(exec)したり、一行ずつ実行(n)したりする

index.jsをデバッグ：
C:\Users\r00528099\study-js-exercises-public-main\exercises\ch05\ex11>node inspect index.js
< Debugger listening on ws://127.0.0.1:9229/f58f2487-2a83-429b-bd3a-524f0812a317
< For help, see: https://nodejs.org/learn/getting-started/debugging
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
Break on start in index.js:1
> 1 function f(o){
  2     let new_obj = {}
  3     for(let k of Object.keys(o)){
debug> c //ブレイクポイントまで処理を進める
break in index.js:5
  3     for(let k of Object.keys(o)){
  4         if(o[k] % 2 === 0 && o[k] !== null){
> 5             debugger;
  6             new_obj[k] = o[k]; //new_obj.kとするとkという名前のプロパティとして解釈されてしまう
  7         }
debug> repl
Press Ctrl+C to leave debug repl
debug> exec k //exec 変数を確認
'y'

