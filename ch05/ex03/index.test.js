import {describe, it, expect} from "vitest" 
import { obj } from "./index.js";

describe("day_count_if", () =>{
    it("returns same result", () =>{
        expect(obj.day_count_if("Jan")).toBe(true);
        expect(obj.day_count_if("Feb")).toBe(false);
        expect(obj.day_count_if("Mar")).toBe(true);
        expect(obj.day_count_if("Apr")).toBe(false);
        expect(obj.day_count_if("May")).toBe(true);
        expect(obj.day_count_if("Jun")).toBe(false);
        expect(obj.day_count_if("Jul")).toBe(true);
        expect(obj.day_count_if("Aug")).toBe(true);
        expect(obj.day_count_if("Sep")).toBe(false);
        expect(obj.day_count_if("Oct")).toBe(true);
        expect(obj.day_count_if("Nov")).toBe(false);
        expect(obj.day_count_if("Dec")).toBe(true);
        expect(obj.day_count_if("abc")).toBe(false);
        
    })
})

describe("day_count_switch", () =>{
    it("returns same result", () =>{
        expect(obj.day_count_switch("Jan")).toBe(true);
        expect(obj.day_count_switch("Feb")).toBe(false);
        expect(obj.day_count_switch("Mar")).toBe(true);
        expect(obj.day_count_switch("Apr")).toBe(false);
        expect(obj.day_count_switch("May")).toBe(true);
        expect(obj.day_count_switch("Jun")).toBe(false);
        expect(obj.day_count_switch("Jul")).toBe(true);
        expect(obj.day_count_switch("Aug")).toBe(true);
        expect(obj.day_count_switch("Sep")).toBe(false);
        expect(obj.day_count_switch("Oct")).toBe(true);
        expect(obj.day_count_switch("Nov")).toBe(false);
        expect(obj.day_count_switch("Dec")).toBe(true);
        expect(obj.day_count_switch("abc")).toBe(false);
    })
})
