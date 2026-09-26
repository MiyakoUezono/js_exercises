import { test, expect, describe} from "vitest"
import { axis } from "./index.js";

function trans_x(r,theta){
    return r * Math.cos(theta)
}

function trans_y(r,theta){
    return r * Math.sin(theta)
}

describe('get x, get yのテスト', () =>{
    test('x,yの値が正しく取得できる', () => {
        expect(axis.x).toBeCloseTo(trans_x(Math.SQRT2, Math.PI / 4))
        expect(axis.y).toBeCloseTo(trans_y(Math.SQRT2, Math.PI / 4))
    })
    test('r,thetaを更新するとx,yも更新される', () => {
        axis.r = 2.0
        axis.theta = 0
        expect(axis.x).toBeCloseTo(trans_x(2, 0))
        expect(axis.y).toBeCloseTo(trans_y(2, 0))
    })
})

describe('set x, set yのテスト', () =>{
    test('xを更新するとr,thetaも更新される', () => { //AIに聞いて追加
        const old_y = axis.y
        axis.x = 2.0
        expect(axis.r).toBeCloseTo(Math.sqrt(2.0**2 + old_y**2))
        expect(axis.theta).toBeCloseTo(Math.atan2(old_y, 2.0))
        expect(axis.y).toBeCloseTo(old_y)
    })

    test('yを更新するとr,thetaも更新される', () => { //AIに聞いて追加
        const old_x = axis.x
        axis.y = 2.0
        expect(axis.r).toBeCloseTo(Math.sqrt(old_x**2 + 2.0**2))
        expect(axis.theta).toBeCloseTo(Math.atan2(2.0, old_x))
        expect(axis.x).toBeCloseTo(old_x)
    })

    test('x,yを更新するとr,thetaも更新される', () => {
        axis.x = 2.0
        axis.y = 2.0
        expect(axis.r).toBeCloseTo(Math.sqrt(2.0**2 + 2.0**2))
        expect(axis.theta).toBeCloseTo(Math.atan2(2.0, 2.0))
    })
    
})
describe('x, yがNaNのテスト', () =>{
    test('x,yそれぞれNaNの場合はエラー', () => {
        expect(() => {axis.x = NaN}).toThrow(TypeError);
        expect(() => {axis.y = NaN}).toThrow(TypeError);
        })
})