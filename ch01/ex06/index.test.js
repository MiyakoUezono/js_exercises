import {describe, it, expect} from "vitest" 
import { fib } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("math", () => {
  describe("fib", () => {
    it("returns same value when n=1", () => {
      expect(fib(1)).toBe(1);
    });

    it("returns same value when n=5", () => {
      expect(fib(5)).toBe(5);
    });

    it("returns same value when n=75", () => {
      expect(fib(75)).toBe(2111485077978050);
      //expect(fib(6)).toBe(8);
    });
  });
});
