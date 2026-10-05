以下のプログラムは 1 から 100 までの FizzBuzz を出力する。
Fizz、Buzz、FizzBuzz、数値、それぞれのケースで式がどのように評価されるか言及しつつ処理を説明しなさい。

```javascript
for (i = 1; i < 101; i++)
  console.log((i % 3 ? "" : "Fizz") + (i % 5 ? "" : "Buzz") || i);
```

||の左辺がtrue,
つまり、
・"Fizz"が返るi%3のみFalse(i%3が0)
・Buzzが返るi%5のみFalse(i%5が0)
・FizzBuzzが返るi%3,i%5いずれもFalse(i%3,i%5が0)
の場合は、それぞれFizz,Buzz,FizzBuzzがそのまま出力される

||の左辺がFalse,
つまり、i%3,i%5ともにTrue(i%3,i%5が0でない)の場合は、右辺のiが評価される
iは0でない（Falseでない）ため、iがそのまま返る

