import {describe, it, expect} from "vitest" 
import { json } from "./index.js";

describe("json", () =>{
    it("JSONとしてパースできる場合", () =>{
        expect(json('12')).toEqual({ success: true, data: 12});
        expect(json('"abc"')).toEqual({ success: true, data: 'abc' });
        expect(json('true')).toEqual({ success: true, data: true});
        expect(json('{"x": 1, "y": 20}')).toEqual({ success: true, data: { x: 1, y: 20 }});
        expect(json('[1, 20]')).toEqual({ success: true, data: [1, 20]});
        expect(json('null')).toEqual({ success: true, data: null});

    })
    it("JSONとしてパースできない場合", () =>{
        expect(json('12//あいうえお').success).toBe(false);
        expect(json('"abc').success).toBe(false);
        expect(json('undefined').success).toBe(false);
        expect(json('{"x": 1, "y": 20,}').success).toBe(false);
        expect(json('').success).toBe(false); //AIに確認し、追加。

    })
})