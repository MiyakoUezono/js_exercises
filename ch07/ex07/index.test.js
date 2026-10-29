import { test, expect, describe} from "vitest"
import { shakersort } from "./index.js";

const seq = [4,13,54,36,34,4];
const seq_2 = [4];
const seq_3 = ["banana", "cherry", "apple"];

test("shakersort", () => {
  expect(shakersort(seq,(lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0))).toStrictEqual([ 4, 4, 13, 34, 36, 54 ]);
  expect(shakersort(seq_2,(lhs, rhs) => (lhs < rhs ? -1 : lhs > rhs ? +1 : 0))).toStrictEqual([ 4 ]);
  expect(shakersort(seq_3,(a, b) => a < b ? -1 : a > b ? 1 : 0)).toStrictEqual(["apple", "banana", "cherry"]);
});