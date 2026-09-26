import {describe, it, expect} from "vitest" 
import { add, sub, mul, div } from "./index.js";

describe("add", () =>{
    it("returns same result", () => {
        expect(add({re:1, im:2},{re:3, im:4})).toEqual({re:4, im:6});
        expect(add({re:-1, im:2},{re:3, im:-4})).toEqual({re:2, im:-2});
    })
    it("returns same result", () => {
        expect(add({re:null, im:2},{re:3, im:4})).toEqual({re:3, im:6});
        expect(add({re:1, im:null},{re:3, im:-4})).toEqual({re:4, im:-4});
    })
});

describe("sub", () =>{
    it("returns same result", () => {
        expect(sub({re:1, im:2},{re:3, im:4})).toEqual({re:-2, im:-2});
        expect(sub({re:-1, im:2},{re:3, im:-4})).toEqual({re:-4, im:6});
    })
    it("returns same result", () => {
        expect(sub({re:null, im:2},{re:3, im:4})).toEqual({re:-3, im:-2});
        expect(sub({re:1, im:null},{re:3, im:-4})).toEqual({re:-2, im:4});
    })
});

describe("mul", () =>{
    it("returns same result", () => {
        expect(mul({re:1, im:2},{re:3, im:4})).toEqual({re:-5, im:10});
        expect(mul({re:-1, im:2},{re:3, im:-4})).toEqual({re:5, im:10});
    })
    it("returns same result", () => {
        expect(mul({re:null, im:2},{re:3, im:4})).toEqual({re:-8, im:6});
        expect(mul({re:1, im:null},{re:3, im:-4})).toEqual({re:3, im:-4});
    })
});

describe("div", () =>{
    it("returns same result", () => {
        expect(div({re:1, im:2},{re:3, im:4})).toEqual({re:11/25, im:2/25});
        expect(div({re:-1, im:2},{re:3, im:-4})).toEqual({re:-11/25, im:2/25});
    })
    it("returns same result", () => {
        expect(div({re:null, im:2},{re:3, im:4})).toEqual({re:8/25, im:6/25});
        expect(div({re:1, im:null},{re:3, im:-4})).toEqual({re:3/25, im:4/25});
    })
});