import {describe, it, expect} from "vitest";
import {equals, equalArrays} from "./index2.js";

describe("equals", () =>{
    it("returns same result", () => {
        expect(equals(42, 42)).toBe(true);
        expect(equals(null, null)).toBe(true);
    })
    it("returns same result", () => {
        expect(equals({x: 42}, 42)).toBe(false);
        expect(equals(null, {x: 42})).toBe(false);
    })
    it("returns same result", () => {
        expect(equals({x: 1}, {y: 1})).toBe(false);
        expect(equals({x: 1}, {x: 1, y: 1})).toBe(false);
    })
    it("returns same result", () => {
        expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10}}})).toBe(true);
        expect(equals({x: {y: {z: 10}}}, {x: {y: {z: 10, w: 1}}})).toBe(false);
    })
});