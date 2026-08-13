import {describe, it, expect} from "vitest" 
import { equivalent, check_length } from "./index.js";

describe("equivalent", () =>{
    it("The length of 💯", () =>{
        expect(check_length("💯")).toBe(2);
    })
})

describe("equivalent", () =>{
    it("returns same result:utf-16", () =>{
        expect(equivalent("\uD83D\uDCAF")).toBe(true);
    })
    it("returns same result:utf-32", () =>{
        expect(equivalent("\u{0001F4AF}")).toBe(true);
    })
})

