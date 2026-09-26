import {describe, it, expect, } from "vitest" 
import { bitCount } from "./index.js";

describe("bitCount", () =>{
    it("returns same result", () => {
        expect(bitCount(0b111)).toEqual(3);
        expect(bitCount(0b1111111111111111111111111111111)).toEqual(31);
        expect(bitCount(7)).toEqual(3);
        expect(bitCount(0x1F)).toEqual(5);
        expect(bitCount(5.245)).toEqual(2);
        expect(bitCount(0b11111111111111111111111111111001)).toEqual(30);
        expect(bitCount(-7)).toEqual(30);
        expect(bitCount(0b1111111111111111111111111111111111)).toEqual(32);
        expect(bitCount(17179869183)).toEqual(32);
        expect(bitCount(Infinity)).toEqual(0);
        expect(bitCount(-Infinity)).toEqual(0);
        expect(bitCount(NaN)).toEqual(0);

    })
})
