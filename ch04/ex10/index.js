//配列 `["r", "i", "c", "o", "h"]` の `"o"` の要素を `delete` で削除したとき、削除後の配列の内容と `length` の値をコンソール出力で確認しなさい。

let list = ["r", "i", "c", "o", "h"];
delete list[3];

console.log(list) //[ 'r', 'i', 'c', <1 empty item>, 'h' ]
console.log(list.length) //5