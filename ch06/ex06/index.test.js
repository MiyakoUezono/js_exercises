import {describe, it, expect} from "vitest" 
import { prop } from "./index.js";

/*
let o1 = {x:10,2:11}
Object.defineProperty(o1,"y",{value:110,enumerable:false} )
Object.defineProperty(o1,1,{value:110,enumerable:true} )
Object.defineProperty(o1,Symbol("sym1"),{value:110,enumerable:true} )

let o2 = Object.create(o1)
Object.defineProperty(o2,"x",{value:110,enumerable:false} )
Object.defineProperty(o2,"y",{value:110,enumerable:false} )
Object.defineProperty(o2,"z",{value:110,enumerable:true} )
Object.defineProperty(o2,3,{value:110,enumerable:true} )
Object.defineProperty(o2,4,{value:110,enumerable:false} )
const sym2 = Symbol("sym2") //Symbolは呼び出す度値が変わるため、作成時に変数を保存しておく必要がある（AIに聞いて修正）
Object.defineProperty(o2,sym2,{value:110,enumerable:true} )
const sym3 = Symbol("sym3")
Object.defineProperty(o2,sym3,{value:110,enumerable:false} )

describe("prop", () =>{
    it("すべての独自プロパティおよび列挙可能な継承プロパティのプロパティ名の配列", () =>{
        expect(prop(o2)).toEqual([ '3', '4', 'x', 'y', 'z', sym2, sym3, '1', '2' ]);
    })
})

*/
describe("独自プロパティ", () =>{
    it("列挙可独自プロパティが返る", () =>{
        let o = {x:10,2:11}
        expect(prop(o)).toEqual([ '2','x' ]);
    })
    it("列挙不可独自プロパティも返る", () =>{
        let o = {}
        Object.defineProperty(o,"x",{value:110,enumerable:false} )
        expect(prop(o)).toEqual([ 'x' ]);
    })
    it("プロパティ名がSymbolの独自プロパティも返る", () =>{
        const sym = Symbol("sym") //Symbolは呼び出す度値が変わるため、作成時に変数を保存しておく必要がある（AIに聞いて修正）
        let o = {}
        Object.defineProperty(o,sym,{value:110,enumerable:false} )
        expect(prop(o)).toEqual([ sym ]);
    })
})

describe("継承プロパティ", () =>{
    it("列挙可継承プロパティが返る", () =>{
        let proto = {x:10,2:11}
        let o = Object.create(proto)
        expect(prop(o)).toEqual([ '2','x' ]);
    })
    it("列挙不可継承プロパティは返らない", () =>{
        let proto = {x:10}
        Object.defineProperty(proto,"y",{value:110,enumerable:false} )
        let o = Object.create(proto)
        expect(prop(o)).toEqual([ 'x' ]);
    })
    it("列挙不可継承プロパティと同じプロパティ名の独自プロパティが作成された場合は返る", () =>{
        let proto = {x:10}
        Object.defineProperty(proto,"y",{value:110,enumerable:false} )
        let o = Object.create(proto)
        Object.defineProperty(o,"y",{value:110,enumerable:true} )
        expect(prop(o)).toEqual([ 'y', 'x' ]);
    })
    it("2段階以上のプロトタイプチェーンでも返る", () =>{　//AIに聞いて追加
        let proto = {x:10}
        let proto2 = Object.create(proto)
        proto2.y = 110
        let o = Object.create(proto2)
        o.z = 110
        expect(prop(o)).toEqual([ 'z', 'y', 'x' ]);
    })
    it("プロトタイプを持たないオブジェクトでもエラーにならない", () =>{　//AIに聞いて追加
        let o = Object.create(null)
        o.z = 110
        expect(prop(o)).toEqual(['z']);
    })
})
