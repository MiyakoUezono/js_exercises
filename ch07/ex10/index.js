export function makeFixedSizeArray(size) {
  const array = new Array(size);
  return {
    get(index) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      return array[index];
    },
    set(index, value) {
      if (index < 0 || array.length <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
      array[index] = value;
    },
    length() {
      return array.length;
    },
  };
}

export class DynamicSizeArray {
  static INITIAL_SIZE = 4; // 初期サイズ

  constructor() {
    this.len = 0; //要素数
    this.array = makeFixedSizeArray(DynamicSizeArray.INITIAL_SIZE);
  }
  get(index) {
    if (index < 0 || this.len <= index) {
        throw new Error(`Array index out of range: ${index}`);
    }
    return this.array.get(index)
  }
  set(index, value) {
    if (index < 0 || this.len <= index) {
        throw new Error(`Array index out of range: ${index}`);
      }
    return this.array.set(index,value);
  }
  length() {
    return this.len;
  }
  push(value) {
    if (this.len >= this.array.length()) {
      // 新しい固定長配列を作成
      const old = this.array;
      this.array = makeFixedSizeArray(old.length() * 2);
      // 古い配列 (old) の要素を新しい配列にコピー
      for(let i=0; i<this.len; i++){
        this.array.set(i,old.get(i))
      }
    }
    this.array.set(this.len,value);
    this.len++;
  }
}

/*
let arr = new DynamicSizeArray()
for(let i=0; i<4; i++){
  arr.push(i+1)
}
console.log(arr.get(4))
*/