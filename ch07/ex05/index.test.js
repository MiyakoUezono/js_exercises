import { test, expect, describe} from "vitest"
import { pop, push, shift, unshift, sort } from "./index.js";

const seq = [1, 2, 3, 4, 5];
const seq_2 = [4, 2, 4, 5, 12];
const seq_3 = ["banana", "cherry", "apple"];

test("pop", () => {
  expect(pop(seq)).toStrictEqual([1, 2, 3, 4]);
  expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
  expect(pop([])).toStrictEqual(undefined);
});

test("push", () => {
  expect(push(seq,6)).toStrictEqual([1, 2, 3, 4, 5, 6]);
  expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
  expect(push([],6)).toStrictEqual([6]);
});

test("shift", () => {
  expect(shift(seq)).toStrictEqual([2, 3, 4, 5]);
  expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
  expect(shift([3])).toStrictEqual([]);
});

test("unshift", () => {
  expect(unshift(seq,0)).toStrictEqual([0, 1, 2, 3, 4, 5]);
  expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
  expect(unshift([],3)).toStrictEqual([3]);
});

test("sort", () => {
  expect(sort(seq,(a, b) => b - a)).toStrictEqual( [5, 4, 3, 2, 1]);
  expect(seq).toStrictEqual([1, 2, 3, 4, 5]);
  expect(sort(seq_2,(a, b) => b - a)).toStrictEqual( [12, 5, 4, 4, 2]);
  expect(seq_2).toStrictEqual([4, 2, 4, 5, 12]);
  expect(sort(seq_3)).toStrictEqual(["apple", "banana", "cherry"]);
  expect(seq_3).toStrictEqual(["banana", "cherry", "apple"]);
});