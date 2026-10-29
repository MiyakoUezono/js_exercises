function reverse_str(str){
   const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
   let arr = [...segmenter.segment(str)]
   //console.log(arr)
   arr = arr.map(value => value["segment"] )
   return arr.reverse().join("")
}

console.log(reverse_str("家族 👨‍👨‍👧‍👧"))

/*
Intl.Segmenter オブジェクト:文字列から書記素、単語、文を取得することができる
第一引数：言語
第二引数："grapheme"書記素 or "word"単語 or "sentence"文

[...segmenter.segment(str)]=
[
  { segment: '家', index: 0, input: '家族 👨‍👨‍👧‍👧' },
  { segment: '族', index: 1, input: '家族 👨‍👨‍👧‍👧' },
  { segment: ' ', index: 2, input: '家族 👨‍👨‍👧‍👧' },
  { segment: '👨‍👨‍👧‍👧', index: 3, input: '家族 👨‍👨‍👧‍👧' }
]
segment:切り出された文字列、index:元の文字列での位置
*/