import{add, mul} from "./index.js";
import { test, expect, describe} from "vitest"


describe('加算を行う関数addのテスト', () =>{
  const A = [[1,2,3],[4,5,6]]
  const B = [[2,3,4],[5,6,7]] 
  const C = [[1,2,3],[4,5,6],[2,1,4]]
  test('２つの行、列が等しい場合', () => {
    expect(add(A,B)).toEqual([[3,5,7],[9,11,13]])
  })
  test('行、列が等しくない場合', () => {
    expect(add(C,B)).toEqual(undefined)
  }) 
})

describe('乗算を行う関数mulのテスト', () =>{
  const A = [[2,4,6]]
  const B = [[7,5],[3,4],[6,2]] 
  const C = [[1,2,3],[4,5,6],[2,1,4]]
  test('掛ける行列の列数と掛けられる行列の行数が等しい場合', () => {
    expect(mul(A,B)).toEqual([ [ 62, 38 ] ])
  })
  test('等しくない場合', () => {
    expect(mul(B,C)).toEqual(undefined)
  }) 
})