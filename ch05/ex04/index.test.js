import {describe, it, expect} from "vitest" 
import { fib_while, fib_do_while, fib_for } from "./index.js";
describe("fib_test", () =>{
    it("returns same str", () =>{
        expect(fib_while()).toEqual([1,  1,  2,  3,  5, 8, 13, 21, 34, 55]);
        expect(fib_do_while()).toEqual([1,  1,  2,  3,  5, 8, 13, 21, 34, 55]);
        expect(fib_for()).toEqual([1,  1,  2,  3,  5, 8, 13, 21, 34, 55]);
    })
})