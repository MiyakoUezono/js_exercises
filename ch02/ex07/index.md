```
let a = 0,
  b = 0;

// prettier-ignore
const c
=
a　
// prettier-ignore
++
b //JavaScriptは,const c = a; ++b; と解釈している

console.log(a, b, c);
```
##実行結果
0 1 0
∵　b=0+1=1, c=a=0

```
// prettier-ignore
const e = a++
b; //JavaScriptは,const e = a++; b; と解釈している

console.log(a, b, e);
```
##実行結果
1 1 0
∵　a=0+1, b=1, e=(+1する前のaの値)=0

