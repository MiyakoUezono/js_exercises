import { test, expect, describe} from "vitest"
import { makeFixedSizeArray, DynamicSizeArray } from "./index.js";

let arr = new DynamicSizeArray()

test("初期サイズ内でpush,set", () => {
  let arr = new DynamicSizeArray()
  for(let i=0; i<4; i++){
    arr.push(i+1)
  }
  expect(arr.length()).toStrictEqual(4);
  expect(arr.get(0)).toStrictEqual(1);
  arr.set(0,10)
  expect(arr.get(0)).toStrictEqual(10);
  expect(() => arr.get(4)).toThrow("Array index out of range: 4") 
  expect(() => arr.set(4,100)).toThrow("Array index out of range: 4")
});


test("初期サイズ内でpush,set", () => {
  let arr = new DynamicSizeArray()
  for(let i=0; i<4; i++){
    arr.push(i+1)
  }
  arr.push(5)
  expect(arr.length()).toStrictEqual(5);
  expect(arr.get(4)).toStrictEqual(5);
});


/*
エラーをテストする方法はAIに聞いた
expectの引数として直接arr.get(4)入れると、関数より先に引数get(4)が実行され、テストが失敗してしまう
アロー関数を引数とすると、expectにその関数が渡され、toThrowの中でその関数が実行される
});
*/