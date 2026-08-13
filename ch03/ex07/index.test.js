import {test, expect} from "vitest" 
import { equalArrays } from "./index.js";

test("ch03-ex07", () => {
  const x = {a:1}; // ここを変更
  const y = 1; // ここを変更

  expect(equalArrays(x, y)).toBe(true);
  expect(x).not.toEqual(y);
});
