import {describe, it, expect} from "vitest" 
import { equivalent } from "./index.js";

describe("equivalent", () =>{
    it("returns same result", () =>{
        expect(equivalent(0.3-0.2,0.1)).toBe(true);
    })
    it("returns same result", () =>{
        expect(equivalent(0.2-0.1,0.1)).toBe(true);
    })
})