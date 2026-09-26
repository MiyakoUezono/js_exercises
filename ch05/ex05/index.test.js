import {describe, it, expect} from "vitest" 
import { f } from "./index.js";
describe("fib_test", () =>{
    it("returns same str", () =>{
        expect(f({ x: 1, y: 2, z: 3 })).toEqual({ y: 2 });
        expect(f({ x: 0, y: 42, z: null, w: 12  })).toEqual({ x: 0, y: 42, w: 12 });
        expect(f({ x: 1, y: 41, z: 23 })).toEqual({ });
    })
})