import{newHashTable, Hash} from "./index.js";
import { test, expect, describe} from "vitest"


describe('newHashTableのテスト', () =>{
  const hashTable = newHashTable(10);

   test('key,valueの追加', () => {
      hashTable.put("key1", "value1");
      hashTable.put("key2", { value: "value2" });

      expect(hashTable.size).toEqual(2)
      expect(hashTable.get("key1")).toEqual("value1")
      expect(hashTable.get("key2")).toEqual({ value: "value2" })
    }),

    test('同じkeyをもつvalueの追加', () => {
       hashTable.put("key2", "new value");
       expect(hashTable.get("key2")).toEqual("new value")
    }),

    test('keyを削除', () => {
       hashTable.remove("key2");
       expect(hashTable.size).toEqual(1)
       expect(hashTable.get("key2")).toEqual(undefined)
    })

})