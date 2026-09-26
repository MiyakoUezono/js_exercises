import {describe, it, expect} from "vitest" 
import { obj } from "./index.js";

describe("toEscapesepuence_if", () =>{
    it("returns same str", () =>{
        expect(obj.toEscapesepuence_if('HelloWorld!')).toBe('HelloWorld!');
        expect(obj.toEscapesepuence_if('Hello\0World!\0')).toBe('Hello\\0World!\\0');
        expect(obj.toEscapesepuence_if('Hello\bWorld!\b')).toBe('Hello\\bWorld!\\b');
        expect(obj.toEscapesepuence_if('Hello\tWorld!')).toBe('Hello\\tWorld!');
        expect(obj.toEscapesepuence_if('Hello\nWorld!')).toBe('Hello\\nWorld!');
        expect(obj.toEscapesepuence_if('Hello\vWorld!')).toBe('Hello\\vWorld!');
        expect(obj.toEscapesepuence_if('Hello\fWorld!')).toBe('Hello\\fWorld!');
        expect(obj.toEscapesepuence_if('Hello\rWorld!')).toBe('Hello\\rWorld!');
        expect(obj.toEscapesepuence_if('"HelloWorld!"')).toBe('\\"HelloWorld!\\"');
        expect(obj.toEscapesepuence_if("'HelloWorld!'")).toBe("\\'HelloWorld!\\'");
        expect(obj.toEscapesepuence_if('Hello\\nWorld!')).toBe('Hello\\\\nWorld!');
        expect(obj.toEscapesepuence_if('Hello\\\nWorld!')).toBe('Hello\\\\\\nWorld!');
        expect(obj.toEscapesepuence_if('"Hello\nWorld\\!"')).toBe('\\"Hello\\nWorld\\\\!\\"');
    })
})

describe("toEscapesepuence_switch", () =>{
    it("returns same str", () =>{
        expect(obj.toEscapesepuence_if('HelloWorld!')).toBe('HelloWorld!');
        expect(obj.toEscapesepuence_if('Hello\0World!\0')).toBe('Hello\\0World!\\0');
        expect(obj.toEscapesepuence_if('Hello\bWorld!\b')).toBe('Hello\\bWorld!\\b');
        expect(obj.toEscapesepuence_switch('Hello\tWorld!')).toBe('Hello\\tWorld!');
        expect(obj.toEscapesepuence_switch('Hello\nWorld!')).toBe('Hello\\nWorld!');
        expect(obj.toEscapesepuence_switch('Hello\vWorld!')).toBe('Hello\\vWorld!');
        expect(obj.toEscapesepuence_switch('Hello\fWorld!')).toBe('Hello\\fWorld!');
        expect(obj.toEscapesepuence_switch('Hello\rWorld!')).toBe('Hello\\rWorld!');
        expect(obj.toEscapesepuence_switch('"HelloWorld!"')).toBe('\\"HelloWorld!\\"');
        expect(obj.toEscapesepuence_switch("'HelloWorld!'")).toBe("\\'HelloWorld!\\'");
        expect(obj.toEscapesepuence_switch('Hello\\nWorld!')).toBe('Hello\\\\nWorld!');
        expect(obj.toEscapesepuence_switch('Hello\\\nWorld!')).toBe('Hello\\\\\\nWorld!');
        expect(obj.toEscapesepuence_switch('"Hello\nWorld\\!"')).toBe('\\"Hello\\nWorld\\\\!\\"');
    })
})
