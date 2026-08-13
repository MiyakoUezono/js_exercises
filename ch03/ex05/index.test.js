import {describe, it, expect} from "vitest" 
import { transform_CRLF, transform_LF } from "./index.js";

describe("transform_CRLF", () =>{
    it("returns same str", () =>{
        expect(transform_CRLF("Hello,\nWorld.")).toBe("Hello,\r\nWorld.");
    })
})

describe("transform_LF", () =>{
    it("returns same str", () =>{
        expect(transform_LF("Hello,\r\nWorld.")).toBe("Hello,\nWorld.");
    })
})

