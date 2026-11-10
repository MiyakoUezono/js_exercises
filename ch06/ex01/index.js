
export function Hash(str){
  const arr = [...str]
  let hash = 0
  for(let char of arr){
    hash += char.codePointAt(0)//文字列をUnicodeコードポイントに変換したものをhash値とした
  }
  return hash
}


export function newHashTable(capacity) {
  return {
    size: 0, // マッピング数を示すプロパティ
    entries: new Array(capacity), // マッピングを格納する固定長の配列
    get(key) { // keyにマップされた値を取得する
      const id = Hash(key) % capacity //配列のインデックスは、Hash値を配列サイズで剰余演算した結果とする
      let node = this.entries[id]
      while(node != undefined){
        if(node.key === key){ 
          return node.value
        }
        node = node.next
      }
      return undefined
    },

    put(key, value) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const id = Hash(key) % capacity
      //idに何も入っていない場合は新規ノードを追加
      if(this.entries[id] === undefined){ 
        this.entries[id] = {key, value, next: undefined}
        this.size ++ //マッピング数を+1
      }
      //idに入っている場合はマッピングに追加
      else{
        let node = this.entries[id]
        //node.nextがundefinedとなるまでループ
        while(true){
          if(node.key === key){ //keyが存在する場合はvalueを上書き
            node.value = value
            return;
          }
          if(node.next === undefined){
            break;
          }
          node = node.next
        }
        node.next = {key, value, next:undefined}//末尾にノードを追加
        this.size ++
      }
    },

    remove(key) {
      // keyのマッピングを削除する
      const id = Hash(key) % capacity
      let node = this.entries[id]
      let prev = undefined
      while(node !== undefined){
        if(node.key === key){
          if(prev === undefined){ //削除対象が１つのノードで構成されている場合
            this.entries[id] = node.next
          }
          else{
            prev.next = node.next //削除対象の前のノードのnextを削除対象の次のノードとする
          }
          this.size --;
          return;
        }
        prev = node;
        node = node.next;
      }
    },
  };
}


function sample() {
  const hashTable = newHashTable(10);
  hashTable.put("key1", "value1");
  hashTable.put("key2", { value: "value2" });

  console.log(`size=${hashTable.size}`); // => size=2
  console.log(`key1=${hashTable.get("key1")}`); // => key1=value1
  console.log(`key2=${JSON.stringify(hashTable.get("key2"))}`); // => key2={"value":"value2"}

  hashTable.put("key2", "new value");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=new value

  hashTable.remove("key2");

  console.log(`key2=${hashTable.get("key2")}`); // => key2=undefined
  console.log(`size=${hashTable.size}`); // => size=1
}

console.log(sample())

/*
put修正前：（nodeを追加した後もループが続いてしまう）
    put(key, value) {
      // key, valueのマッピングを追加する(keyが存在する場合はvalueを上書きする)
      const id = Hash(key) % capacity
      if(this.entries[id] === undefined){ //idにマッピングが入っていない場合は新規追加
        this.entries[id] = {key, value, next: undefined}
        this.size ++ //マッピング数を+1
      }
      else{
        let node = this.entries[id]
        while(node !== undefined){
          if(node.key === key){ //keyが存在する場合はvalueを上書き
            node.value = value
            break;
          }
          if(node.next !== undefined){
          node = node.next
          }
          else{
            node.next = {key, value, next:undefined}//末尾にnodeを追加した後、if(node.next !== undefined)の前にnodeが更新されないためif文が通ってしまう
            this.size ++
          }
        }
      }
    },
    remove(key) {
      // keyのマッピングを削除する
      const id = Hash(key) % capacity
      let node = this.entries[id]
      let prev = undefined
      while(node != undefined){
        if(node.key === key){
          if(prev === undefined){
            this.entries[id] = node.next
          }
          else{
            prev.next = node.next
          }
          this.size --
        }
        prev = node;
        node = node.next;
      }
    },
  */