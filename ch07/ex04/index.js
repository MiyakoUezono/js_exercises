const data = [
    { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
    { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
    { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
    { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
    { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
    { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
    { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
    { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
    { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

//1. `math`の全員の合計点
console.log(data.reduce((x,value) => x + value["math"], 0)) //530

//2. クラスAの`chemistry`の平均点
const A_data = data.filter(value => value["class"] ==="A")//クラスAのみフィルター
console.log(A_data.reduce((x,value) => x + value["chemistry"]/A_data.length, 0)) //45

//3. 3科目合計点のクラスC内での平均点
const C_data = data.filter(value => value["class"] ==="C")//クラスCのみフィルター
console.log(C_data.reduce((x,value) => x + (value["math"]+value["chemistry"]+value["geography"])/C_data.length, 0)) //176.6666

//4. 3科目合計点が最も高い人の`name`
const high_index = data.reduce((x,value,index,arr) => (arr[x]["math"] +arr[x]["chemistry"]+arr[x]["geography"]>value["math"]+value["chemistry"]+value["geography"]) ? x : index,0)
console.log(data[high_index]["name"]) //Frank

//5. 全体の`geography`の標準偏差
const ave = data.reduce((x,value) => x + value["geography"]/data.length, 0)
const variance = data.reduce((x,value) => x + (value["geography"]-ave) **2 /data.length,0)
console.log(Math.sqrt(variance)) //22.3330569358242