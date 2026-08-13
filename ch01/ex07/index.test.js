import {describe, it, expect} from "vitest" 
import { Point } from "./index.js";

// TypeScript の場合は以下:
// import { abs, sum, factorial } from "./index.ts";

describe("add", () => {

  it("returns same value when (2,3)", () => {
    let p = new Point(1,1);
    expect(p.add(2,3)).toBe((3,4));
  });

  it("returns same value when (-3,-2)", () => {
      let p = new Point(1,1);
      expect(p.add(-3,-2)).toBe((-2,-1));
  });
});


