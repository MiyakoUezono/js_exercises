
{
  let a = 1;
  let b = 2;
  let obj = { a: 3, b: 4 };
  obj.a = obj.b
  console.log({ a, b, obj }); // console.log の出力: { a: 1, b: 2, obj: { a: 4, b: 4 }}
  // with 文を使わずに同じ処理を書く場合: obj.a = obj.b
}
{
  let a = 1;
  let b = 2;
  let obj = { b: 4 };
  a = obj.b
  console.log({ a, b, obj });// console.log の出力: { a: 4, b: 2, obj: { b: 4 } }
}
{
  let a = 1;
  let b = 2;
  let obj = { a: 3 };
  obj.a = b
  console.log({ a, b, obj });// console.log の出力: { a: 1, b: 2, obj: { a: 2 } }
}
{
  let a = 1;
  let b = 2;
  let obj = {};
  a = b
  console.log({ a, b, obj });// console.log の出力: { a: 2, b: 2, obj: {} }
}

/*
with(obj)は、まずobjのプロパティを探し、なければ外側を探す
そのため、
2つ目のケースは、aがobjのプロパティに存在しないため、withの外側の変数aが使われる
3つ目のケースは、bがobjのプロパティに存在しないため、withの外側の変数bが使われる
4つ目のケースは、a,bがobjのプロパティに存在しないため、withの外側の変数a,bが使われる
=>objのプロパティを指すのか、外側の変数を指すのか分かりにくい
*/
