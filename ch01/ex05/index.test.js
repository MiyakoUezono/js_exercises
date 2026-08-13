import {describe, it, expect} from "vitest" 
import { abs, sum, factorial } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("abs", () => {
    it("returns same value when positive value given", () => {
      expect(abs(42)).toBe(42);
    });

    it("returns negated value when negative value given", () => {
      expect(abs(-42)).toBe(42);
    });

    it("returns zero value when zero given", () => {
      expect(abs(0)).toBe(0);
    });
  });

// 以下に sum, factorial のテストを記載せよ
  describe("sum", () => {
    it("return sama value", () => {
      expect(sum([-1,3,2])).toBe(4);
    });
  });

  describe("factorial", () => {
    it("return same value when positive value given", () => {
      expect(factorial(5)).toBe(120);
    });
  });
  
});
