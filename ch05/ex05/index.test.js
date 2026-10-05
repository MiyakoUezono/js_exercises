import {describe, it, expect} from "vitest" 
import { create_obj } from "./index.js";
describe("create_objのテスト", () =>{
    it("プロパティが全て整数の場合", () =>{
        expect(create_obj({ x: 1, y: 2, z: 3 })).toEqual({ y: 2 });
        expect(create_obj({ x: -1, y: -2, z: 4 })).toEqual({ y: -2, z: 4 });
        expect(create_obj({ x: 1, y: 41, z: 23 })).toEqual({ });
    })
    it("プロパティが全て整数の場合", () =>{
        expect(create_obj({ x: 0, y: 42, z: null, w: 12  })).toEqual({ x: 0, y: 42, w: 12 });
        expect(create_obj({ })).toEqual({ });
        expect(create_obj({ x: 1.4, y: 42.1, z: 2 })).toEqual({z: 2 });//AIに聞いて追加
    })
    it("元のオブジェクトは変更いない", () =>{
        const obj = { x: 0, y: 42, z: null, w: 12  }
        const new_obj = create_obj(obj)
        expect(new_obj).toEqual({ x: 0, y: 42, w: 12 });
        expect(obj).toEqual({ x: 0, y: 42, z: null, w: 12  });
    })
})