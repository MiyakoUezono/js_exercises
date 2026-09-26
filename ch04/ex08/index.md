古い JavaScript のコードでは `undefined` と比較を行う際に:

```js
if (foo === undefined) { ... }
```

ではなく以下のように書かれたコードを見ることがある (注: `void 0` は `undefined` を返す)。

```js
if (foo === void 0) { ... }
```

これにはどのような理由があるか、また今ではこのような書き方をしないのは何故か調べて回答しなさい。


古いjavascriptエンジンには読み取り専用属性がついておらず、値であるundefinedに上書きされる可能性があったため、void 0が使われていた
Ex.
console.log( undefined ); // undefined
let undefined = 1234;
console.log( undefined ); // 古いjsエンジンだと、「1234」

現在のブラウザ (JavaScript 1.8.5 / Firefox 4 以降) での undefined は、ECMAScript 5 仕様により、設定不可、書込不可となったため、
今では使われなくなった