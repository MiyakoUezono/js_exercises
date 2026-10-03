import {describe, it, expect, } from "vitest" 
import { sub, sum } from "./index.js";

describe("sub", () =>{
    it("整数の引き算", () => {
        expect(sub(27,10)).toEqual(17);
        expect(sub(3,27)).toEqual(-24);
        expect(sub(-27,10)).toEqual(-37);
        expect(sub(3,-27)).toEqual(30);
        expect(sub(-3,-27)).toEqual(24);
        expect(sub(0,2)).toEqual(-2);
        expect(sub(2,0)).toEqual(2);
        expect(sub(0,0)).toEqual(0);
    })
    it("整数以外が含まれている場合", () => {
        expect(sub(27.8,10.2)).toEqual(17);
        expect(sub(27.7,0)).toEqual(27); //AIに聞いて追加
        expect(sub(0,27.3)).toEqual(-27); //AIに聞いて追加
        expect(sub(NaN,2)).toEqual(-2);
        expect(sub(2,NaN)).toEqual(2);
        expect(sub(2,Infinity)).toEqual(2); //AIに聞いて追加
        expect(sub(Infinity,2)).toEqual(-2); //AIに聞いて追加
    })
    it("引き算すると32ビットを超える場合", () => {
        expect(sub(2147483647, -1)).toEqual(-2147483648);//AIに聞いて追加
        expect(sub(0, -2147483648)).toEqual(-2147483648); //AIに聞いて追加
    })
    
})