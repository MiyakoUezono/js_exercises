let a = undefined
let b = null


const date1 = new Date("2024-01-12T00:00:00Z");
const date2 = new Date("2024-02-16T00:00:00Z");

//console.log(date1 <= date2.getTime())
//console.log(date1.toString() <= date2.getTime().toString())

function eq(a, b) {
  let type_a = typeof a
  let type_b = typeof b
  if (type_a === type_b) {
    if(a === b) return true;
  }
  else if(a === undefined || a === null){
    if(b === undefined || b === null){
      return true;
    }
    else{
      return false
    }
  }
  else if(b === undefined || b === null){
    return false
  }
  else if(a instanceof Date === true || b instanceof Date === true){
    if(a.toString() === b.toString()){
      return true
    }
    else{
      return false
    }
  }
  else if(Number(a) === Number(b)){
    return true
  }
  else if(a.valueOf() === b.valueOf()){
    return true
  }
  else if(a.valueOf() === Number(b) || b.valueOf() === Number(a)){
    return true
  }
  else if(a.toString() === b.toString()){
    console.log('Error1')
    return true
  }
 return false;
}

function lte(a, b) {
  let type_a = typeof a
  let type_b = typeof b
  if (type_a === type_b) {
    if(a < b || a === b) return true;
  }
  else if(a === undefined || b === undefined){
    if(b === null || a === null){
      return true;
    }
    else{
      return false
    }
  }
  else if(a === NaN || b === NaN){
    return false
  }
  else if(Number(a) !== undefined || Number(b) !== undefined){
    if(Number(a) === Number(b) || Number(a) < Number(b)){
      return true
    }
    else return false
  }
  else if(a.valueOf() !== undefined || b.valueOf() !== undefined){
    if(a.valueOf() === b.valueOf() || a.valueOf() < b.valueOf()){
    return true
    }
    else false
  }
  else if(a.toString() !== undefined || b.toString() !== undefined){
    if(a.toString() === b.toString() || a.toString() < b.toString()){
      console.log('Error')
      return true
    }
    else return false
  }
  else if(Number(a.valueOf()) === Number(b.valueOf()) || Number(a.valueOf()) < Number(b.valueOf())){
    return true
  }
 return false;
}

function testFunc(str, value) {
  const fn = () => {};
  fn.toString = () => str;
  fn.valueOf = () => value;
  return fn;
}


 console.log('true<=0',true<=0,'lte',lte(true, 0))
  console.log('true<=1',true<=1,'lte',lte(true, 1))
  console.log('null<=0',null<=0,'lte',lte(null, 0))
  console.log('null<=1',null<=1,'lte',lte(null, 1))
  console.log('undefined<=3',undefined<=3,'lte',lte(undefined, 3))
  console.log('3<=undefined',3<=undefined,'lte',lte(3, undefined))
 console.log('3<=NaN',3<=NaN,'lte',lte(3, NaN))
 console.log('NaN<=3',NaN<=3,'lte',lte(NaN, 3))

 /* 
 console.log('new Test("10", 1)<=2',new Test("10", 1)<=2,'lte',lte(new Test("10", 1), 2))
  console.log('new Test("10", 1)<=1',new Test("10", 1)<=1,'lte',lte(new Test("10", 1), 1))
  console.log('new Test("10", {})<=2',new Test("10", {})<=2,'lte',lte(new Test("10", {}), 2))
  console.log('new Test("10", {})<=10',new Test("10", {})<=10,'lte',lte(new Test("10", {}), 10))
 console.log('new Test("10", null)<=10',new Test("10", null)<=10,'lte',lte(new Test("10", null), 10))
 console.log( 'new Test("10", undefined)<=10',new Test("10", undefined)<=10,'lte',lte(new Test("10", undefined), 10))

 console.log('2<=new Test("10", 1)',2<=new Test("10", 1),'lte',lte(2, new Test("10", 1)))
 console.log('1<=new Test("10", 1)',1<=new Test("10", 1),'lte',lte(1, new Test("10", 1)))
 console.log('2<=new Test("10", {})',2<=new Test("10", {}),'lte',lte(2, new Test("10", {})))
 console.log('10<=new Test("10", {})',10<=new Test("10", {}),'lte',lte(10, new Test("10", {})))
 console.log('10<=new Test("10", null)',10<=new Test("10", null),'lte',lte(10, new Test("10", null)))
 console.log('10<=new Test("10", undefined)',10<=new Test("10", undefined),'lte',lte(10, new Test("10", undefined)))
*/
  console.log('testFunc("10", 1)<=2',testFunc("10", 1)<=2,'lte',lte(testFunc("10", 1), 2))
  console.log('testFunc("10", 1)<=1',testFunc("10", 1)<=1,'lte',lte(testFunc("10", 1), 1))
  console.log('testFunc("10", {})<=2',testFunc("10", {})<=2,'lte',lte(testFunc("10", {}), 2))
 console.log('testFunc("10", {})<=10',testFunc("10", {})<=10,'lte',lte(testFunc("10", {}), 10))
 console.log('testFunc("10", null)<=10',testFunc("10", null)<=10,'lte',lte(testFunc("10", null), 10))
 console.log('testFunc("10", undefined)<=10',testFunc("10", undefined)<=10,'lte',lte(testFunc("10", undefined), 10))

console.log('2<=testFunc("10", 1))',2<=testFunc("10", 1),'lte',lte(2, testFunc("10", 1)))
 console.log('1<=testFunc("10", 1))',1<=testFunc("10", 1),'lte',lte(1, testFunc("10", 1)))
 console.log('2<=testFunc("10", {}))',2<=testFunc("10", {}),'lte',lte(2, testFunc("10", {})))
 console.log('10<=testFunc("10", {}))',10<=testFunc("10", {}),'lte',lte(10, testFunc("10", {})))
  console.log('10<=testFunc("10", null))',10<=testFunc("10", null),'lte',lte(10, testFunc("10", null)))
 console.log('10<=testFunc("10", undefined))',10<=testFunc("10", undefined),'lte',lte(10, testFunc("10", undefined)))

  console.log('date1<=date2',date1<=date2,'lte',lte(date1, date2))
 console.log('date1<=date2.getTime()',date1<=date2.getTime(),'lte',lte(date1, date2.getTime()))
 console.log('date1.getTime()<=date2',date1.getTime()<=date2,'lte',lte(date1.getTime(), date2))

 console.log('date2<=date1',date2<=date1,'lte',lte(date2, date1))
 console.log('date2.getTime()<=date1',date2.getTime()<=date1,'lte',lte(date2.getTime(), date1))
 console.log('date2<=date1.getTime()',date2<=date1.getTime(),'lte',lte(date2, date1.getTime()))