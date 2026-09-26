import {vi,test,expect} from "vitest"

const mock = vi.fn();

test('sumプロパティがJSON.stringifyで正しく反映される', () => {
  const obj = {
    x: 0,
    y: 0,
    sum() {
      mock();
      return this.x + this.y;
    },
  };

  Object.defineProperty(obj, "sum", {get:obj.sum, enumerable:true}) //get:プロパティが参照されたときに関数が呼び出される
  //obj["sum"] = obj.sum()と書くとsumの値が固定されてしまう（x,yを変えても変わらない）
  obj.x = 1;
  obj.y = 2;

  expect(JSON.stringify(obj)).toBe(`{"x":1,"y":2,"sum":3}`);
  expect(mock).toHaveBeenCalled();

})

/*
備忘（分からなかったのでAIに聞いた）：
・constで宣言したオブジェクトのプロパティを変更することはできる
・constが保護しているのは変数がどのオブジェクトを指しているのか（参照）であり、中身を変えることではない
*/