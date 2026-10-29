console.log("𠮷野家"[0])
console.log("👨‍👨‍👧‍👧"[0])

//以下、AIに聞きながら見た目の1文字目を取得する方法を試してみた
console.log([..."𠮷野家"][0]) 
const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" })//書記素ごとに分解
const chars = [...segmenter.segment("👨‍👨‍👧‍👧")].map(s => s.segment)
console.log(chars[0])  